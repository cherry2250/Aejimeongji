create table if not exists breed
(
    id         bigint auto_increment
        primary key,
    breed_name varchar(45) not null
);

create index breed_breed_name_index
    on breed (breed_name);

create index breed_id_index
    on breed (id);

create table if not exists category
(
    name varchar(10) not null
        primary key,
    constraint category_name_uindex
        unique (name)
);

create table if not exists member
(
    id            bigint auto_increment
        primary key,
    email         varchar(45)  null,
    password      varchar(255) not null,
    phone_number  varchar(45)  null,
    username      varchar(45)  null,
    nickname      varchar(45)  null,
    role          varchar(45)  null,
    updated_date  datetime(6)  null,
    created_date  datetime(6)  null,
    refresh_token varchar(255) null,
    constraint member_email_uindex
        unique (email),
    constraint member_refresh_token_uindex
        unique (refresh_token)
);

create table if not exists petplace
(
    id            bigint auto_increment
        primary key,
    address       varchar(255) null,
    category      varchar(255) null,
    description   blob         null,
    distance      double       null,
    name          varchar(255) null,
    opening_hours varchar(255) null,
    point         geometry     null,
    tel           varchar(255) null,
    detail        varchar(255) null,
    home_page     varchar(255) null,
    rating        double       null
);

create table if not exists bookmark
(
    id          bigint auto_increment
        primary key,
    member_id   bigint null,
    petplace_id bigint null,
    constraint bookmark_member_id_fk
        foreign key (member_id) references member (id)
            on delete cascade,
    constraint bookmark_petplace_id_fk
        foreign key (petplace_id) references petplace (id)
            on delete cascade
);

create table if not exists image
(
    dtype           varchar(31)  not null,
    id              bigint auto_increment
        primary key,
    origin_filename varchar(255) null,
    store_filename  varchar(255) null,
    petplace_id     bigint       null,
    constraint FK1p7o0qfi1uwe9ovf56kqs04h
        foreign key (petplace_id) references petplace (id)
            on delete cascade
);

create table if not exists dog
(
    id           bigint auto_increment
        primary key,
    name         varchar(20) not null,
    adoption_day date        null,
    birthday     date        null,
    breed_id     bigint      null,
    weight       double      not null,
    neutering    bit         null,
    gone         bit         null,
    gender       varchar(25) null,
    updated_date datetime(6) null,
    created_date datetime(6) null,
    member_id    bigint      null,
    image_id     bigint      null,
    constraint dog_breed_id_fk
        foreign key (breed_id) references breed (id),
    constraint dog_image_id_fk
        foreign key (image_id) references image (id),
    constraint dog_member_id_fk
        foreign key (member_id) references member (id)
            on delete cascade
);

create table if not exists calendar
(
    id           bigint auto_increment
        primary key,
    content      blob        null,
    date         date        null,
    is_alert     bit         null,
    is_active    bit         null,
    created_date datetime(6) null,
    updated_date datetime(6) null,
    dog_id       bigint      null,
    constraint FKn3ditj360hybyp818k5urfnfi
        foreign key (dog_id) references dog (id)
            on delete cascade
);

create index calendar_date_index
    on calendar (date);

create table if not exists guidebook
(
    id           bigint auto_increment
        primary key,
    title        varchar(255) null,
    content      longblob     null,
    category     varchar(255) null,
    created_date datetime(6)  null,
    updated_date datetime(6)  null,
    thumbnail_id bigint       null,
    month_max    int          not null,
    month_min    int          not null,
    weight_max   int          not null,
    weight_min   int          not null,
    constraint FKt0fipj6y1aapkkopxdlm1wgoy
        foreign key (thumbnail_id) references image (id)
);

create table if not exists likes
(
    id           bigint auto_increment
        primary key,
    liketime     datetime null,
    guidebook_id bigint   null,
    member_id    bigint   null,
    constraint FKa4vkf1skcfu5r6o5gfb5jf295
        foreign key (member_id) references member (id),
    constraint FKs1c3jksr6hdd501mt5h7h4ep5
        foreign key (guidebook_id) references guidebook (id)
);

create table if not exists walking
(
    id           bigint auto_increment
        primary key,
    distance     double       not null,
    walking_date datetime(6)  null,
    walking_time varchar(255) null
);

create table if not exists walkingdog
(
    id         bigint auto_increment
        primary key,
    calories   double not null,
    dog_id     bigint null,
    walking_id bigint null,
    constraint FKfjsfdcgqbpiqv3gdu6kcee5rx
        foreign key (dog_id) references dog (id),
    constraint FKl8ags0m7yc2b927lb3kcmyb9i
        foreign key (walking_id) references walking (id)
);