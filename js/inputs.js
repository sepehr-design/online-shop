let pageCheck = 0;
let pageCount ;
const products = [
    {
        "id":1,
        "name":"چیپس چاکلز",
        "image":"./img/product1.jpg",
        "description":"چیپس سیب زمینی 60 گرمی چاکلز",
        "type":"سوپر مارکت",
        "price":25000,
    },
    {
        "id":2,
        "name":"چیپس مزمز",
        "image":"./img/product2.jpg",
        "description":"چیپس سیب زمینی 60 گرمی مزمز",
        "type":"سوپر مارکت",
        "price":27000,
    },
    {
        "id":3,
        "name":"پفک چیتوز",
        "image":"./img/product3.jpg",
        "description":"پفک 40 گرمی چیتوز موتوری",
        "type":"سوپر مارکت",
        "price":30000,
    },
    {
        "id":4,
        "name":"بیسکوییت ساقه طلایی",
        "image":"./img/product4.jpg",
        "description":"بیسکوییت 200 گرمی ساقه طلایی",
        "type":"سوپر مارکت",
        "price":32000,
    },
    {
        "id":5,
        "name":"تخم مرغ",
        "image":"./img/product5.jpg",
        "description":"تخم مرغ زرین پر 9 عددی",
        "type":"سوپر مارکت",
        "price":56000,
    },
    {
        "id":6,
        "name":"نودل الیت",
        "image":"./img/product6.jpg",
        "description":"نودل الیت سبزیجات 75 گرمی",
        "type":"سوپر مارکت",
        "price":24000,
    },
    {
        "id":7,
        "name":"کت مردانه زاگرس",
        "image":"./img/product7.jpg",
        "description":"سایز : M",
        "type":"پوشاک",
        "price":2225000,
    },
    {
        "id":8,
        "name":"دامن زنانه هیبا",
        "image":"./img/product8.jpg",
        "description":"سایز : S",
        "type":"پوشاک",
        "price":675000,
    },
    {
        "id":9,
        "name":"کفش پوما",
        "image":"./img/product9.jpg",
        "description":"کفش پوما مدل suede سایز 40",
        "type":"پوشاک",
        "price":7250000,
    },
    {
        "id":10,
        "name":"مانتو بلوچ",
        "image":"./img/product10.jpg",
        "description":"سایز : L",
        "type":"پوشاک",
        "price":1625000,
    },
    {
        "id":11,
        "name":"شومیز جین وست",
        "image":"./img/product11.jpg",
        "description":"سایز : M",
        "type":"پوشاک",
        "price":225000,
    },
    {
        "id":12,
        "name":"شلوار جین ماوی",
        "image":"./img/product12.jpg",
        "description":"سایز : 38",
        "type":"پوشاک",
        "price":1250000,
    },
    {
        "id":13,
        "name":"Galaxy Buds Pro",
        "image":"./img/product13.jpg",
        "description":"سایر توضیحات اقلام همراه هدفون، هندزفری و هدست" +
            "کیس شارژ / دفترچه راهنما / کابل USB-C" +
            " قطر درایور " +
            " ۱۱ میلی‌متر " +
            " نوع آهن‌ربا " +
            " نئودیمیوم " +
            " محدوده عملکرد " +
            " ۱۰ متر متر " +
            " نوع گوشی " +
            " دو گوشی ",
        "type":"الکترونیک",
        "price":3960000,
    },
    {
        "id":14,
        "name":"هدفون بلوتوثی اپل مدل AirPods 3",
        "image":"./img/product14.jpg",
        "description":"نوع هدفون، هدست و هندزفری : TWS (True Wireless Stereo)" +
            " | سایر توضیحات اقلام همراه هدفون، هندزفری و هدست : دفترچه راهنما / کابل شارژر" +
            " | قابلیت نویز کنسلینگ : فاقد قابلیت نویز کنسلینگ" +
            " | محدوده عملکرد : تا ۱۰ متر" +
            " | نوع گوشی : دو گوشی",
        "type":"الکترونیک",
        "price":12839800,
    },
    {
        "id":15,
        "name":"شارژر فست شارژ سامسونگ 15 وات",
        "image":"./img/product15.jpg",
        "description":" برند: سامسونگ/samsung" +
            " |  ولتاژ ورودی.: ۱۰۰ تا ۲۴۰ ولت" +
            " | ولتاژ خروجی: ۵ ولت ۹ ولت" +
            " | قابلیت شارژ سریع : ✅",
        "type":"الکترونیک",
        "price":163000,
    },
    {
        "id":16,
        "name":"فلش مموری USB 2.0 اسکو مدل Oscoo R001 ظرفیت 16 گیگابایت",
        "image":"./img/product16.jpg",
        "description":"ظرفیت : 16 گیگابایت" +
            " | رابط : USB 2.0",
        "type":"الکترونیک",
        "price":189000,
    },
    {
        "id":17,
        "name":"شارژر بی سیم",
        "image":"./img/product17.jpg",
        "description":"وزن : ۸۷.۵ گرم" +
            " | شدت جریان خروجی : ۱.۰ آمپر مخصوص موبایل",
        "type":"الکترونیک",
        "price":1251000,
    },
    {
        "id":18,
        "name":"هدفون JVC مدل HA-S20BT",
        "image":"./img/product18.jpg",
        "description":"وزن : 96 گرم" +
            " | نوع اتصال : بی‌سیم" +
            " | نسخه‌ی بلوتوث : 4.1" +
            " | سایر مشخصات : 11 ساعت شارژ جهت گوش کردن موسیقی / 2.5 ساعت زمان لازم جهت شارژ باتری",
        "type":"الکترونیک",
        "price":2850000,
    },
]