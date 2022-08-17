from selenium import webdriver
from selenium.webdriver.common.by import By

from rating_crawling import get_rating

import pymysql

# geocoder
import numpy as np
import pandas as pd
from urllib.request import urlopen
from urllib import parse
from urllib.request import Request
from urllib.error import HTTPError
import json

# naver map api key
client_id = 'b4vkibj6ac'
client_pw = 'GWTUYMpXF0BNjpAF63TVDD3Chd3wxkZiNjTCRo62'

api_url = 'https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query='

def geocoder(address):

    add_url = parse.quote(address)

    url = api_url + add_url
    request = Request(url)
    request.add_header('X-NCP-APIGW-API-KEY-ID', client_id)
    request.add_header('X-NCP-APIGW-API-KEY', client_pw)

    try:
        response = urlopen(request)
    except HTTPError as e:
        print('HTTP ERROR')
        lat = 0.0
        lng = 0.0
    else:
        rescode = response.getcode()
        if rescode == 200:
            response_body = response.read().decode('utf-8')
            response_body = json.loads(response_body)
            try:
                if response_body['addresses'] == []:
                    print("'result' NOT EXIST")
                    lat = 0.0
                    lng = 0.0
                else:
                    lat = response_body['addresses'][0]['y'] # 위도
                    lng = response_body['addresses'][0]['x'] # 경도
            except:
                lat = 0.0
                lng = 0.0
        else:
            print(f'Response error code : {rescode}')
            lat = 0.0
            lng = 0.0
    
    return [lat, lng]


# selenium
options = webdriver.ChromeOptions()
options.add_argument('headless')

driver = webdriver.Chrome(options=options)

base_url = 'http://hatdog.co.kr/pc_hatdog/?m1Code=ar_info&m2Code=ar_info&mode=view&idx='

# xpaths
name_xpath = "//body/div[@id='Container']/div[1]/div[1]/h3[1]"
description_xpath = '/html[1]/body[1]/div[1]/div[1]/div[1]/h3[1]/span[1]'
address_xpath = '//body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/ul[1]/li[2]/dl[1]/dd[1]'
tel_xpath = '//body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/ul[1]/li[3]/dl[1]/dd[1]'
detail_xpath = "//body/div[@id='Container']/div[1]/div[1]/div[1]/div[3]/div[1]"
images_xpath = "//body/div[@id='Container']/div[1]/div[1]/div[1]/div[1]/div[1]/p"
categoryLogo_xpath = "//body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/dl[1]/dt[1]/img"

# css selectors
homePage_css = 'div.sContainer div.s21_tour_de_top div.s21_detail_box.area.pr div.s21_detail_tbox ul.s21_detail_twrap li:nth-child(4) dl:nth-child(1) dd:nth-child(2) > a:nth-child(1)'
openingTime_css = 'div.sContainer div.s21_tour_de_top div.s21_detail_box.area.pr div.s21_detail_tbox ul.s21_detail_twrap li:nth-child(5) dl:nth-child(1) dd:nth-child(2) > a:nth-child(1)'

# LogoDatas
# 음식점
restaurantLogo = "http://appdata.hungryapp.co.kr/images/hatdog/img//travel/icon_food_line.png?ver=2"
cafeLogo = "http://appdata.hungryapp.co.kr/images/hatdog/img//travel/icon_cafe_line.png?ver=1"
dogCafeLogo = "http://appdata.hungryapp.co.kr/images/hatdog/img//travel/icon_dogcafe_line.png"
restLogos = [restaurantLogo, cafeLogo, dogCafeLogo]

# 관광지
tourSpotLogo = "http://appdata.hungryapp.co.kr/images/hatdog/img/travel/icon_tourism_line.png?ver=4"

# 숙소
lodgingLogo = "http://appdata.hungryapp.co.kr/images/hatdog/img/travel/icon_accommodation_line.png?ver=2"

# 캠핑
campingLogo1 = "http://appdata.hungryapp.co.kr/images/hatdog/img/travel/camp1.png?ver=3"
campingLogo2 = "http://appdata.hungryapp.co.kr/images/hatdog/img/travel/camp2.png?ver=3"
campingLogo3 = "http://appdata.hungryapp.co.kr/images/hatdog/img/travel/camp3.png?ver=3"
campingLogo4 = "http://appdata.hungryapp.co.kr/images/hatdog/img/travel/camp4.png?ver=3"
campingLogo5 = "http://appdata.hungryapp.co.kr/images/hatdog/img/travel/camp5.png?ver=3"
campingLogo6 = "http://appdata.hungryapp.co.kr/images/hatdog/img/travel/camp6.png?ver=3"
campingLogos = [campingLogo1, campingLogo2, campingLogo3, campingLogo4, campingLogo5, campingLogo6]

# 쇼핑
shoppingLogo = "http://appdata.hungryapp.co.kr/images/hatdog/img/travel/icon_shopping_line.png?ver=2"

def getPetPlace(petPlaceId):

    driver.get(base_url + f'{petPlaceId}')

    # petplace name
    try:
        name = driver.find_element(By.XPATH, name_xpath).text
    except:
        return

    if not name:
        return
    print(petPlaceId)

    # petplace description
    description = driver.find_element(By.XPATH, description_xpath).text

    # petplace address
    address = driver.find_element(By.XPATH, address_xpath).text

    # petplace tel
    tel = driver.find_element(By.XPATH, tel_xpath).text

    # petplace homepage
    homePage = driver.find_element(By.CSS_SELECTOR, homePage_css).text

    # petplace opening_time
    openingTime = driver.find_element(By.CSS_SELECTOR, openingTime_css).text

    # petlace details
    try:
        detail = driver.find_element(By.XPATH, detail_xpath).text
    except:
        detail = ''

    # petplace images
    images = driver.find_elements(By.XPATH, images_xpath)

    # category Logos
    try:
        categoryLogo = driver.find_element(By.XPATH, categoryLogo_xpath).get_attribute("src")
    except:
        categoryLogo = ''

    infos = []
    menus = []
    category = '호텔링'

    if categoryLogo:

        infos_xpath = "//body/div[@id='Container']/div[1]/div[2]/div[2]/div[1]/div[1]/img"

        if categoryLogo in restLogos:
            category = '음식점'
            infos_xpath = "//body/div[@id='Container']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/p[3]/img"
            menus_xpath = "//body/div[@id='Container']/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/img"
            menus = driver.find_elements(By.XPATH, menus_xpath)

        elif categoryLogo in campingLogos:
            category = '캠핑'

        elif categoryLogo == shoppingLogo:
            category = '쇼핑'

        elif categoryLogo == lodgingLogo:
            category = '숙소'

        elif categoryLogo == tourSpotLogo:
            category = '관광지'

        infos = driver.find_elements(By.XPATH, infos_xpath)

    name = name[:len(name) - len(description) - 1]
    point = geocoder(address)

    rating = get_rating(address.split()[0], name)
    print(rating)

    image_list = ''
    info_list = ''
    menu_list = ''

    # detail list
    detail.replace("\n", ' ')
    detail_list = detail.split()

    # image list
    for i in range(len(images)):
        image = driver.find_element(By.XPATH, images_xpath + "[" + str(i + 1) + "]/a/img").get_attribute("src")
        image_list += image + ','

    # info list
    for i in range(len(infos)):
        info = driver.find_element(By.XPATH, infos_xpath + "[" + str(i + 1) + "]").get_attribute("src")
        info_list += info + ','

    # menu list
    for i in range(len(menus)):
        menu = driver.find_element(By.XPATH, menus_xpath + "[" + str(i + 1) + "]").get_attribute("src")
        menu_list += menu + ','

    return {
        'id' : petPlaceId,
        'name' : name,
        'description' : description,
        'address' : address,
        'point' : point,
        'tel' : tel,
        'homePage' : homePage,
        'openingTime' : openingTime,
        'category' : category,
        'detail' : detail_list,
        'image' : image_list,
        'info' : info_list,
        'menu' : menu_list,
        'rating' : rating
    }

petPlaceList = []
for i in range(75, 100): # 10673
    result = getPetPlace(i)
    if result:
        petPlaceList.append(result)

connect = pymysql.connect(host='localhost', user='admin', password='1234', db='aejimeongji')
cursor = connect.cursor()

for p in petPlaceList:

    id = int(p['id'])
    name = str(p['name'])
    description = str(p['description'])
    address = str(p['address'])
    lat = str(p['point'][0])
    lng = str(p['point'][1])
    tel = str(p['tel'])
    category = str(p['category'])
    detail = p['detail']
    homePage = str(p['homePage'])
    openingTime = str(p['openingTime'])
    rating = p['rating']


    sql = """insert into petplace
    (id, name, description, address, point, tel, category, detail, home_page, opening_hours, rating)
    values (%s, %s, %s, %s, POINT(%s, %s), %s, %s, %s, %s, %s, %s)
    """
    val = (id, name, description, address, lat, lng, tel, category, detail[0], homePage, openingTime, rating)
    cursor.execute(sql, val)


connect.close()