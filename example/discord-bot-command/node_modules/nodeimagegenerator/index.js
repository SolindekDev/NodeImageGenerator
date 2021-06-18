// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//
//   Paczka stworzona przez Solindek Copyright (c) 2021
//
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//
//      Package create by Solindek Copyright (c) 2021
//
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

module.exports = {
    randomDog: function() {
        // Array of image links
        // Lista linków zdjęć
        let dogPictures = [
            "https://www.zooplus.pl/magazyn/wp-content/uploads/2021/04/dog-niemiecki-768x512.jpg",
            "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*",
            "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTICdLS_xN0sSVrYvQvSSjgaX0kLcl1mzHP2838AN8KygVD7qZpwGvjjhub_LHvut3ptYQ&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskeYNmVMeGZdNiI6ahm2z647C65saNNF4Fw&usqp=CAU",
            "https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900"
        ]
        // Getting random number
        // Dostrajemy losową liczbę
        let randomNumber = Math.floor(Math.random() * dogPictures.length)
        // Wracamy i wysyłamy link
        return dogPictures[randomNumber]
    },
    randomCat: function() {
        // Array of image links
        // Lista linków zdjęć
        let catPictures = [
            "https://798423.smushcdn.com/1552302/wp-content/uploads/2020/11/young-cat-P4EC5U9-1280x640.jpg?lossy=1&strip=1&webp=1",
            "https://www.zooplus.pl/magazyn/wp-content/uploads/2019/12/kot-przybłęda-768x512.jpeg",
            "https://www.zooplus.pl/magazyn/wp-content/uploads/2019/08/kot-syjamski-768x510.jpg",
            "https://zwierzaki.pl/wp-content/uploads/2021/01/kot-rosyjski-niebieski-1200x900.jpg",
            "https://i.some-random-api.ml/ZiSHA1RvNg.jpg",
            "https://i.imgur.com/RZHLTkU.jpg",
            "https://i.some-random-api.ml/LWanWVzxO9.jpg",
            "https://i.some-random-api.ml/IC9sssLQyP.jpg"
        ] 
        // Getting random number
        // Dostrajemy losową liczbę
        let randomNumber = Math.floor(Math.random() * catPictures.length)
        // Wracamy i wysyłamy link
        return catPictures[randomNumber]
    },
    randomBird: function() {
        // Array of image links
        // Lista linków zdjęć
        let birdPictures = [
            "https://i.some-random-api.ml/P6K4Mabxxh.png",
            "https://i.some-random-api.ml/jZicDdI1Vy.png",
            "https://i.some-random-api.ml/cZ5rxE5LJG.png",
            "https://i.some-random-api.ml/WibVulitkR.jpg",
            "https://i.some-random-api.ml/II2LKfO9Yb.png",
            "https://i.some-random-api.ml/A2JeJhVoCW.png",
            "https://i.some-random-api.ml/II2LKfO9Yb.png",
            "https://i.some-random-api.ml/Z70SAYT7u4.png"
        ] 
        // Getting random number
        // Dostrajemy losową liczbę
        let randomNumber = Math.floor(Math.random() * birdPictures.length)
        // Wracamy i wysyłamy link
        return birdPictures[randomNumber]
    },
    randomPanda: function() {
        // Array of image links
        // Lista linków zdjęć
        let pandaPictures = [
            "https://i.imgur.com/wQQKvti.jpg",
            "https://i.imgur.com/PFTHokT.jpg",
            "https://i.imgur.com/Lf4gBMI.jpg",
            "https://i.imgur.com/rWxR825.jpg",
            "https://i.imgur.com/Goe4isG.jpg",
            "https://i.imgur.com/QEss4La.jpg",
            "https://i.imgur.com/xwtYLFZ.jpg",
            "https://i.imgur.com/u1cb7a7.jpg",
            "https://i.imgur.com/fClJeO6.jpg"
        ] 
        // Getting random number
        // Dostrajemy losową liczbę
        let randomNumber = Math.floor(Math.random() * pandaPictures.length)
        // Wracamy i wysyłamy link
        return pandaPictures[randomNumber]
    },
    randomFox: function() {
        // Array of image links
        // Lista linków zdjęć
        let foxPictures = [
            "https://i.imgur.com/MtuhfMb.jpg",
            "https://i.imgur.com/79oBgls.jpg",
            "https://i.imgur.com/yMvKz6s.jpg",
            "https://i.imgur.com/leQhTWq.jpg",
            "https://i.imgur.com/mk0g9oy.jpg",
            "https://i.imgur.com/KaC2eWN.jpg",
            "https://i.imgur.com/7DR7mdT.jpg",
            "https://i.imgur.com/vq6wCru.jpg",
        ] 
        // Getting random number
        // Dostrajemy losową liczbę
        let randomNumber = Math.floor(Math.random() * foxPictures.length)
        // Wracamy i wysyłamy link
        return foxPictures[randomNumber]
    },
}