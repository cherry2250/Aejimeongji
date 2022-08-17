import pymysql
from review_crawling import get_reviews

connect = pymysql.connect(host='i7d203.p.ssafy.io', user='root', password='dowlajdwl1234', db='aejimeongji')
# connect = pymysql.Connect(host='localhost', user='admin', password='1234', database='aejimeongji')
cursor = connect.cursor()

select_query = "SELECT id, name, address FROM petplace"
insert_query = "INSERT INTO review (reviewer, content, date, hash_tags, petplace_id) VALUES (%s, %s, %s, %s, %s)"

cursor.execute(select_query)
result = cursor.fetchall()


for petplace in result[5100:5200]:
    place_id, place_name = petplace[0], petplace[1]
    place_sido = petplace[2].split()[0]
    try:
        reviews = get_reviews(place_sido, place_name)
    except:
        continue

    if reviews:
        for review in reviews:
            data = (review.get('reviewer'), review.get('content'), review.get('date'), review.get('hash_tags'), place_id)
            cursor.execute(insert_query, data)
            connect.commit()

connect.close()
