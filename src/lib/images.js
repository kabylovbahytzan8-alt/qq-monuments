// ─── Hero / main site image ────────────────────────────────────────────────
export const images = {
  // Chilpyk — used on main hero and on Chilpyk monument page only
  hero: 'https://media.base44.com/images/public/6a0b00097f5888beaa46cec9/fe1d5adb8_generated_d933ea04.png',
};

// ─── Per-monument image sets ────────────────────────────────────────────────
// Unsplash search queries are matched to monument type:
// - desert ruins / ancient fortresses → arid landscape + ruins
// - mausoleums → Islamic architecture, domes, sacred sites
// - Aral Sea / nature → sea, desert, ships, steppe
// - museums → interior art galleries, buildings
// - Nukus monuments → Soviet-era statues, urban monuments

const monumentImages = {

  // ── Fortresses ──────────────────────────────────────────────────────────

  'chilpyk': {
    cover: 'https://karakalpakstan.travel/data/uploads/00_media/2025/avgust/photo_2025-08-04_17-39-24.jpg',
    gallery: [
      'https://karakalpakstan.travel/data/uploads/00_media/2025/avgust/photo_2025-08-04_17-39-24.jpg',
      'https://ic.pics.livejournal.com/appassionata_lr/13101813/1771506/1771506_800.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/4a/e7/32/chilpyk-kala.jpg?w=900&h=-1&s=1',
    ],
  },

  // Ayaz-Kala — desert ruins, mud-brick ancient fortress
  'ayaz-kala': {
    cover: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Ayaz-Kala-2.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/3/33/Ayaz-Kala-2.jpg',
      'https://uzbekistan.travel/storage/app/media/uploaded-files/ayaz%20kala3.jpg',
      'https://legacy.uz//media/news/0/-r67a1m.jpg',
      'https://www.advantour.com/img/uzbekistan/karakalpakstan/ayaz-kala3.jpg',
    ],
  },

  // Toprak-Kala — large mudbrick ruins on flat desert plain
  'toprak-kala': {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGoHy26aPiJaM2_J0-1fSs7nx18az_68XMA&s',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGoHy26aPiJaM2_J0-1fSs7nx18az_68XMA&s',
      'https://explorers.uz/image/cache/data/info/uzbekistan/toprak-kala/01_big-1600x1200.jpg',
      'https://www.centralasia-travel.com/upload/text/toprak-kala-01.jpg',
    ],
  },

  'koi-krylgan-kala': {
    cover: 'https://karakalpakstan.travel/data/uploads/00_media/2024/avgust/qoy-qrilgan-qala/photo_2024-08-20_11-04-54.jpg',
    gallery: [
      'https://karakalpakstan.travel/data/uploads/00_media/2024/avgust/qoy-qrilgan-qala/photo_2024-08-20_11-04-54.jpg',
      'https://www.advantour.com/img/uzbekistan/karakalpakstan/koy-krylgan-kala3.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/8/88/Koi-Krylgan-Kala.jpg',
    ],
  },

  'mizdakhan': {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUM-M2liDNPbsACXT5h564koCRRsmIylteow&s',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUM-M2liDNPbsACXT5h564koCRRsmIylteow&s',
      'https://uzbek-travel.com/images/uz/Landmarks/Nukus/Mizdakhan/nukus_mizdakhan_03.jpg',
      'https://uzbek-travel.com/images/uz/Landmarks/Nukus/Mizdakhan/nukus_mizdakhan_14.jpg',
    ],
  },

  'gyaur-kala': {
    cover: 'https://uzbek-travel.com/images/uz/Landmarks/Nukus/Gyaur-Kala/sd11_12_332.jpg',
    gallery: [
      'https://uzbek-travel.com/images/uz/Landmarks/Nukus/Gyaur-Kala/sd11_12_332.jpg',
      'https://uzbek-travel.com/images/uz/Landmarks/Nukus/Gyaur-Kala/sd11_12_333.jpg',
      'https://uzbek-travel.com/images/uz/Landmarks/Nukus/Gyaur-Kala/gyaur-kala_nukus_6.jpg',
    ],
  },

  'janbas-kala': {
    cover: 'https://karakalpakstan.travel/data/uploads/00_media/2025/oktyabr/jambas-qala/1.jpg',
    gallery: [
      'https://karakalpakstan.travel/data/uploads/00_media/2025/oktyabr/jambas-qala/1.jpg',
      'https://www.orexca.com/img/uzbekistan/karakalpakstan/janbas-kala2.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUT6uyQo3yltv-6MDWAYVh8b54DEsgjsnhQA&s',
    ],
  },

  'big-guldursun': {
    cover: 'https://karakalpakstan.travel/data/uploads/00_media/2025/noyabr/3.jpg',
    gallery: [
      'https://karakalpakstan.travel/data/uploads/00_media/2025/noyabr/3.jpg',
      'https://karakalpakstan.travel/data/uploads/00_media/2025/noyabr/4.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYpRqHA6fg9efIt7SUNL_MCBqIkjSOo4Ong&s',
    ],
  },

  'small-guldursun': {
    cover: 'https://www.shutterstock.com/image-photo/ruins-fortress-katta-guldursun-qala-260nw-2518262511.jpg',
    gallery: [
      'https://www.shutterstock.com/image-photo/ruins-fortress-katta-guldursun-qala-260nw-2518262511.jpg',
      'https://www.shutterstock.com/image-photo/ruins-fortress-katta-guldursun-qala-260nw-2469290249.jpg',
      'https://www.shutterstock.com/image-photo/ruins-fortress-katta-guldursun-qala-260nw-2488705603.jpg',
    ],
  },

  'kyzyl-kala': {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6t37SOuwrIf944g9hy5hk0ol50swcKqSYw&s',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6t37SOuwrIf944g9hy5hk0ol50swcKqSYw&s',
      'https://karakalpakstan.travel/data/uploads/00_media/2025/sentyabr/qizil-qala/1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Kyzyl-Kala_%28extrapolated_reconstitution%29.jpg/330px-Kyzyl-Kala_%28extrapolated_reconstitution%29.jpg',
    ],
  },

  'pil-kala': {
    cover: 'https://karakalpakstan.travel/data/uploads/00_media/2025/oktyabr/pil-qala/1.jpg',
    gallery: [
      'https://karakalpakstan.travel/data/uploads/00_media/2025/oktyabr/pil-qala/1.jpg',
      'https://karakalpakstan.travel/data/uploads/00_media/2025/oktyabr/pil-qala/3.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/13/Pil_qala.jpg',
    ],
  },

  'bazar-kala': {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSzY6sX6gQ79-oBT6q_UAdPQPd9h4uS4G2-w&s',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSzY6sX6gQ79-oBT6q_UAdPQPd9h4uS4G2-w&s',
      'https://cdn1.img.sputniknews.uz/img/969/20/9692046_0:257:2731:1793_600x0_80_0_0_acddfbf4ac52518cf4e53bc38e795683.jpg',
    ],
  },

  'angka-kala': {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMSj7Un2KkweO_pKyiU9LrOQa-TD1Kpimb_w&s',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMSj7Un2KkweO_pKyiU9LrOQa-TD1Kpimb_w&s',
      'https://www.shutterstock.com/image-photo/angka-kala-ancient-fortress-260nw-1106831690.jpg',
    ],
  },

  'kurgashin-kala': {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGvODhiYtK4-Byiz0_7HJInQ671a5NHmOog&s',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGvODhiYtK4-Byiz0_7HJInQ671a5NHmOog&s',
      'https://static-pano.maps.yandex.ru/v1/?panoid=1439539998_798442312_23_1571980286&size=500%2C240&azimuth=42&tilt=10&api_key=maps&signature=ymuaEz0dNtp5dyWRyEYIRVou9IXySObhAPXAoob2ftA=',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdc4I01BJ8Xdw4ovwLghP4paK5bm0P0GkLSA&s',
    ],
  },

  'burly-kala': {
    cover: 'https://www.advantour.com/img/uzbekistan/karakalpakstan/janbas-kala6.jpg',
    gallery: [
      'https://www.advantour.com/img/uzbekistan/karakalpakstan/janbas-kala6.jpg',
      'https://www.advantour.com/img/uzbekistan/news/20120416/janbas-kala3.jpg',
    ],
  },

  'aqshakhan-kala': {
    cover: 'https://karakalpakstan.travel/data/uploads/00_media/2024/noyabr/akshxan-qala/photo_2024-11-13_12-03-09.jpg',
    gallery: [
      'https://karakalpakstan.travel/data/uploads/00_media/2024/noyabr/akshxan-qala/photo_2024-11-13_12-03-09.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8aOsrmUJvwhGp_IzeFUjTNr_rnbRBmz7FQ&s',
    ],
  },

  'duman-kala': {
    cover: 'https://www.shutterstock.com/image-photo/ruins-duman-kala-one-desert-260nw-2380467757.jpg',
    gallery: [
      'https://www.shutterstock.com/image-photo/ruins-duman-kala-one-desert-260nw-2380467757.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTib5ifNj8AOf-Oi4RdWN0FoR2o-86Tp9pyog&s',
    ],
  },

  'davkesken': {
    cover: 'https://lh6.googleusercontent.com/proxy/18S3oYbKYp5x9OqoqefHn45F5kZOEbtcFplEy-BguxPdF_n7kQtSqigUaIh19xAMVH4EmZUniBI975yCGmg ',
    gallery: ['https://lh5.googleusercontent.com/proxy/Hfqgr4w_Dmb0Q7Y7Q7VWPRzk4qDR0Y5Sp_DzBWDu1WPBn4waBDxjFJVfEM44_ucF6_ltQrTsalvJ1TFSgvY', 
      'https://lh6.googleusercontent.com/proxy/18S3oYbKYp5x9OqoqefHn45F5kZOEbtcFplEy-BguxPdF_n7kQtSqigUaIh19xAMVH4EmZUniBI975yCGmg'
    ],
  },

  'qavat-kala': {
    cover: 'https://www.tourstouzbekistan.com/uploads/news/my_files/uzbek%20culture/%D0%BA%D0%B0%D0%B2%D0%B0%D1%82%20%D0%BA%D0%B0%D0%BB%D0%B0.jpeg',
    gallery: ['https://www.tourstouzbekistan.com/uploads/news/my_files/uzbek%20culture/%D0%BA%D0%B0%D0%B2%D0%B0%D1%82%20%D0%BA%D0%B0%D0%BB%D0%B0.jpeg', 'https://people-travels.com/images/Nukus/Kavat-Kala-fortress.jpg'],
  },

  'kirk-kyz': {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScoO_cHnruzPl_EUYcK7ImZJVgvnXDdotltg&s',
    gallery: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScoO_cHnruzPl_EUYcK7ImZJVgvnXDdotltg&s', 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Kirk-Kiz_fortress_-_Interior-6.jpg'],
  },

  'sultan-uvays': {
    cover: 'https://uzbekistan.travel/storage/app/media/uploaded-files/28.jpg',
    gallery: [
      'https://uzbekistan.travel/storage/app/media/uploaded-files/28.jpg',
      'https://fergana.agency/siteapi/media/images/85bd4cd8-1d32-4143-a1aa-fe78c0747489.jpeg',
    ],
  },

  'mazlumkhan-sulu': {
    cover: 'https://uzbekistan.travel/storage/app/media/Otabek/Turli%20xil/Mazlumxon%20sulu%20mavzaleyi/cropped-images/%D0%9C%D0%B0%D0%B2%D0%B7%D0%BE%D0%BB%D0%B5%D0%B9%20%D0%9C%D0%B0%D0%B7%D0%BB%D1%8B%D0%BC%D1%85%D0%B0%D0%BD%20%D1%81%D1%83%D0%BB%D1%83_2-0-0-0-0-1724915805.jpg',
    gallery: [
      ,
      'https://uzbekistan.travel/storage/app/media/Otabek/Turli%20xil/Mazlumxon%20sulu%20mavzaleyi/cropped-images/%D0%9C%D0%B0%D0%B2%D0%B7%D0%BE%D0%BB%D0%B5%D0%B9%20%D0%9C%D0%B0%D0%B7%D0%BB%D1%8B%D0%BC%D1%85%D0%B0%D0%BD%20%D1%81%D1%83%D0%BB%D1%83_2-0-0-0-0-1724915805.jpg',
    ],
  },

  'shamun-nabi': {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROjX6BTVxeP-vstb8ZE1kzeXzWCRTNBJCaCg&s',
    gallery: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROjX6BTVxeP-vstb8ZE1kzeXzWCRTNBJCaCg&s', 
      'https://xodjeyli.uz/images/content/shamun-nabiy2.jpg'
    ],
  },

  'khoja-ishan': {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktJ8JB3f3RKFCq367ktXjT9HgsNrScrFaYg&s',
    gallery: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktJ8JB3f3RKFCq367ktXjT9HgsNrScrFaYg&s'],
  },

  'keshirmes-baba': {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8AQWbY7mcgQ-ag3Y7tb9F-y99k47_J043wA&s',
    gallery: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8AQWbY7mcgQ-ag3Y7tb9F-y99k47_J043wA&s', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Keshirmes_Baba_%2804%29_-_2025-08-17.jpg/3840px-Keshirmes_Baba_%2804%29_-_2025-08-17.jpg'],
  },

  'erejep-khalifa': {
    cover: 'https://avatars.mds.yandex.net/get-altay/13200126/2a00000192aa581375ddcfef93d6ffdf84a2/L_height',
    gallery: ['https://avatars.mds.yandex.net/get-altay/13200126/2a00000192aa581375ddcfef93d6ffdf84a2/L_height', 'https://thumbs.dreamstime.com/b/%D1%80%D1%83%D0%B8%D0%BD%D1%8B-%D1%87%D0%B0%D1%81%D0%BE%D0%B2-%D0%BC%D0%B5%D1%87%D0%B5%D1%82%D0%B8-erejep-khalifa-aka-%D0%BC%D0%B8%D1%80%D0%B0-mizdakhan-khodjeyli-karakalpakstan-%D1%83%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D0%B0-95156722.jpg'],
  },

  'hakim-ata': {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIGl1zouF8o1nsF6Jnwn5Xr_zlqK4BGOYZw&s',
    gallery: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIGl1zouF8o1nsF6Jnwn5Xr_zlqK4BGOYZw&s'],
  },

  'mizdakhan-necropolis': {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0Q90eufOB38biRf4y92XHO5HsG0-XNrhzg&s',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0Q90eufOB38biRf4y92XHO5HsG0-XNrhzg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZ5EC2ufvwzX9SU6wq38sASZ94upO3LHJHw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDb5Ipo-AOG62JIwcfHHF6QyzHi1VSa_H8w&s',
    ],
  },

  'jomart-kassab': {
    cover: 'https://static-pano.maps.yandex.ru/v1/?panoid=1428015497_795495398_23_1571124692&size=500%2C240&azimuth=7.2&tilt=10&api_key=maps&signature=RCpRUSGuw488-BORSofba22CsnKee6A6ewOCNHLcSg0=',
    gallery: ['https://static-pano.maps.yandex.ru/v1/?panoid=1428015497_795495398_23_1571124692&size=500%2C240&azimuth=7.2&tilt=10&api_key=maps&signature=RCpRUSGuw488-BORSofba22CsnKee6A6ewOCNHLcSg0='],
  },

  'qubla-ustyurt': {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ54vxhZ5GgZcJdRyftw4qfF40ARGw1GZNxTg&s',
    gallery: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ54vxhZ5GgZcJdRyftw4qfF40ARGw1GZNxTg&s'],
  },

  'savitsky-museum': {
    cover: 'https://uzbekistan.travel/storage/app/media/Rasmlar/cropped-images/7F1A4042-0-0-0-0-1737973158.jpg',
    gallery: [
      'https://uzbekistan.travel/storage/app/media/Rasmlar/cropped-images/7F1A4042-0-0-0-0-1737973158.jpg',
      'https://www.advantour.com/img/uzbekistan/nukus/nukus-museum/nukus-museum3.jpg',
    ],
  },

  'state-museum': {
    cover: 'https://historical-museum.uz/museum.webp',
    gallery: ['https://historical-museum.uz/museum.webp'],
  },

  'berdakh-museum': {
    cover: 'https://avatars.mds.yandex.net/get-altay/14703533/2a000001953b76803643feebf872e407bd4f/L_height',
    gallery: ['https://avatars.mds.yandex.net/get-altay/14703533/2a000001953b76803643feebf872e407bd4f/L_height', 
      'https://uzor.uz/wp-content/uploads/2020/08/museums-berdah.jpg'
    ],
  },

  'ethnographic-museum': {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOdYJoFm0yDOQwy-iGVOFYvLolnrgDh_rEw&s',
    gallery: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOdYJoFm0yDOQwy-iGVOFYvLolnrgDh_rEw&s',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/85/93/fd/first-floor.jpg?w=1200&h=-1&s=1'],
  },

  'ellikkala-museum': {
    cover: 'https://avatars.mds.yandex.net/get-altay/4001569/2a0000017520de32be67fae907a19d923f7e/L_height',
    gallery: ['https://avatars.mds.yandex.net/get-altay/4001569/2a0000017520de32be67fae907a19d923f7e/L_height'],
  },

  'aral-sea': {
    cover: 'https://eurasianet.org/sites/default/files/styles/article/public/images/040814_01_0.JPG?itok=tSdI7C-W',
    gallery: [
      'https://eurasianet.org/sites/default/files/styles/article/public/images/040814_01_0.JPG?itok=tSdI7C-W',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUOeFyXxmz2EvcBRXq3BeRTclY7U79VSOuww&s',
    ],
  },

  'muynak-ships': {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeE9T-OAx9zqQXSWqYBkxcQ3KHsoGHxAHDPA&s',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeE9T-OAx9zqQXSWqYBkxcQ3KHsoGHxAHDPA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBEIMIbZ6UnLhFusYL_Aj3bCp84RRXm2osA&s',
    ],
  },

  'ustyurt-plateau': {
    cover: 'https://karakalpakstan.travel/data/uploads/00_media/2024/sentyabr/photo_2024-09-05_18-18-30.jpg',
    gallery: [
      'https://karakalpakstan.travel/data/uploads/00_media/2024/sentyabr/photo_2024-09-05_18-18-30.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhWAzb5WaCuvu0gYgQFMSoCyKkCkaMPA0ZuA&s',
    ],
  },

  'amudarya-delta': {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RlALdwWxgaPwx8xT3aSMMfBuMqNJjZwMgw&s',
    gallery: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RlALdwWxgaPwx8xT3aSMMfBuMqNJjZwMgw&s', 'https://ayan-turkmenistan.travel/wp-content/uploads/2023/10/amudarya-1920x960.jpg'],
  },

  'sudochye-lake': {
    cover: 'https://www.advantour.com/img/uzbekistan/aral/sudochie-lake3.jpg',
    gallery: ['https://www.advantour.com/img/uzbekistan/aral/sudochie-lake3.jpg'],
  },

  'muynak': {
    cover: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Moynaq.jpg',
    gallery: ['https://upload.wikimedia.org/wikipedia/commons/f/f9/Moynaq.jpg', 'https://uzbekistan.travel/storage/app/uploads/public/67a/45e/791/thumb_4549_1140_0_0_0_auto.jpg'],
  },

  'khodjeyli': {
    cover: 'https://t4.ftcdn.net/jpg/04/52/04/19/360_F_452041973_3wdZw9GSZjEcWwgnFG3dspCzStwSzo90.jpg',
    gallery: [
      'https://t4.ftcdn.net/jpg/04/52/04/19/360_F_452041973_3wdZw9GSZjEcWwgnFG3dspCzStwSzo90.jpg'
    ],
  },

  'turtkul': {
    cover: 'https://upload.wikimedia.org/wikipedia/commons/4/48/%D0%93%D0%BE%D1%80%D0%BE%D0%B4_%D0%A2%D1%83%D1%80%D1%82%D0%BA%D1%83%D0%BB%D1%8C._%D0%9C%D0%B5%D1%87%D0%B5%D1%82%D1%8C.jpg',
    gallery: ['https://upload.wikimedia.org/wikipedia/commons/4/48/%D0%93%D0%BE%D1%80%D0%BE%D0%B4_%D0%A2%D1%83%D1%80%D1%82%D0%BA%D1%83%D0%BB%D1%8C._%D0%9C%D0%B5%D1%87%D0%B5%D1%82%D1%8C.jpg'],
  },

  'beruni': {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVTeEd4tgF7HlQm9GO0dPqCzb_c3OHZvRFw&s',
    gallery: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVTeEd4tgF7HlQm9GO0dPqCzb_c3OHZvRFw&s'],
  },

  'tok-kala': {
    cover:   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIRAgmpFi1uiAymhc2xc5Ff1ScNRYkO3U2Q&s',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIRAgmpFi1uiAymhc2xc5Ff1ScNRYkO3U2Q&s',
    ],
  },

  'ajiniyaz-monument': {
    cover:   'https://podrobno.uz/upload/iblock/16a/iav1ovcx1ncsgb65iiju9gqi4tzo8u6u/4234252553.webp',
    gallery: [
      'https://podrobno.uz/upload/iblock/16a/iav1ovcx1ncsgb65iiju9gqi4tzo8u6u/4234252553.webp', 'https://yandex.ru/maps/org/azhiniyaz_kosybay_uly/163385003187/panorama/'
    ],
  },

  'berdakh-monument': {
    cover:   'https://lh5.googleusercontent.com/proxy/4XdcPmUXp3f4rJXjSOQBjBf0MEjqirbuIXpAc-5KD409_gkNdr6qcld6fM4w2w7KV0Rf_mPe9O8RLSmrklYXksU9',
    gallery: [
      'https://lh5.googleusercontent.com/proxy/4XdcPmUXp3f4rJXjSOQBjBf0MEjqirbuIXpAc-5KD409_gkNdr6qcld6fM4w2w7KV0Rf_mPe9O8RLSmrklYXksU9'
    ],
  },

  'savitsky-monument': {
    cover:   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwdt7PVsoWgMP5qIVbibDJJZbFr66SU33Vw&s',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwdt7PVsoWgMP5qIVbibDJJZbFr66SU33Vw&s',
    ],
  }, 

  'wwii-memorial': {
    cover:   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBXiDJvPHQzMen55NziGBpKCMdExzNbj-BLw&s',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBXiDJvPHQzMen55NziGBpKCMdExzNbj-BLw&s',
    ],
  },

  'afghan-war-memorial': {
    cover:   'https://www.gazeta.uz/media/img/2017/02/BukRzf14872541921295_b.jpg',
    gallery: [
      'https://www.gazeta.uz/media/img/2017/02/BukRzf14872541921295_b.jpg',
    ],
  },

  'independence-monument': {
    cover:   'https://thumbs.dreamstime.com/b/arch-independence-square-nukus-mustaqillik-maydoni-city-karakalpakstan-region-uzbekistan-227658101.jpg',
    gallery: [
      'https://thumbs.dreamstime.com/b/arch-independence-square-nukus-mustaqillik-maydoni-city-karakalpakstan-region-uzbekistan-227658101.jpg',
    ],
  }, 
  
  'jirau-monument': {
    cover:   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrVk-9UQkywcaDzuVjbOL4B-1rm-EVw834w&s',
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrVk-9UQkywcaDzuVjbOL4B-1rm-EVw834w&s',
    ],
  },

'alpamys-monument': {
    cover:   'https://c8.alamy.com/comp/T82PDG/a-monument-to-the-ancient-turkic-epic-or-dastan-alpamish-also-spelled-as-alpamysh-or-alpamis-and-in-uzbek-alpomish-situated-in-a-park-in-the-city-of-termez-in-surkhandarya-or-surxondaryo-region-in-uzbekistan-T82PDG.jpg',
    gallery: [
      'https://c8.alamy.com/comp/T82PDG/a-monument-to-the-ancient-turkic-epic-or-dastan-alpamish-also-spelled-as-alpamysh-or-alpamis-and-in-uzbek-alpomish-situated-in-a-park-in-the-city-of-termez-in-surkhandarya-or-surxondaryo-region-in-uzbekistan-T82PDG.jpg',
    ],
  },

  'fishermen-monument': {
    cover:   'https://knadmin.beoblood.kz/uploads/313034472_417804330540817_732092344542016598_n_f7af714396.jpg',
    gallery: [
      'https://knadmin.beoblood.kz/uploads/313034472_417804330540817_732092344542016598_n_f7af714396.jpg',
    ],
  },

'amudarya-monument': {
    cover:   'https://russian.eurasianet.org/sites/default/files/styles/article/public/2022-11/1-Trilling-6249_0.jpg.jpg?itok=eLUjr9kX',
    gallery: [
      'https://russian.eurasianet.org/sites/default/files/styles/article/public/2022-11/1-Trilling-6249_0.jpg.jpg?itok=eLUjr9kX',
    ],
  },

  'kalalygyr': {
    cover:   'https://uzbekistan.travel/storage/app/media/uploaded-files/1753246902459.png',
    gallery: [
      'https://uzbekistan.travel/storage/app/media/uploaded-files/1753246902459.png',
    ],
  },

'kavat-kala-kh': {
    cover:   'https://people-travels.com/images/Nukus/Kavat-Kala-fortress.jpg',
    gallery: [
      'https://people-travels.com/images/Nukus/Kavat-Kala-fortress.jpg',
    ],
  }, 
  
  'qumboskan-kala': {
    cover:   'https://silkadv.com/sites/default/files/0_2_59r34.jpg',
    gallery: [
      'https://silkadv.com/sites/default/files/0_2_59r34.jpg',
    ],
  },

  'constitution-monument': {
    cover:   'https://joqargikenes.uz/media/slides/2025/04/29/header.jpg',
    gallery: [
      'https://joqargikenes.uz/media/slides/2025/04/29/header.jpg',
    ],
  },

  'friendship-monument': {
    cover:   'https://2img.net/h/s018.radikal.ru/i522/1303/53/005449f576e9.jpg',
    gallery: [
      'https://2img.net/h/s018.radikal.ru/i522/1303/53/005449f576e9.jpg',
    ],
  },

  'teachers-monument': {
    cover:   'https://cdn.uza.uz/2024/10/01/21/07/eSJ3hLOROiYKnW0BmwW0J2PVSepIgpY7_front.jpg',
    gallery: [
      'https://cdn.uza.uz/2024/10/01/21/07/eSJ3hLOROiYKnW0BmwW0J2PVSepIgpY7_front.jpg',
    ],
  },

  'aral-ecology-monument': {
    cover:   'https://novastan.org/en/wp-content/uploads/sites/8/2021/06/15kn.jpg',
    gallery: [
      'https://novastan.org/en/wp-content/uploads/sites/8/2021/06/15kn.jpg',
    ],
  },

  'caravan-route': {
    cover:   'https://marakandatravel.asia/wp-content/uploads/2019/11/8.jpg',
    gallery: [
      'https://marakandatravel.asia/wp-content/uploads/2019/11/8.jpg',
    ],
  },
'zoroastrian-temples': {
    cover:   'https://api.society.uz/media/1111photo_2024-04-02_14-21-37_2_1.webp',
    gallery: [
      'https://api.society.uz/media/1111photo_2024-04-02_14-21-37_2_1.webp',
    ],
  },

  'ellikkala-walls': {
    cover:   'https://lh6.googleusercontent.com/proxy/JiVDR2kAy-CSfv4ijwH9o2TUAAvKgG1L9Oz9xVviTG5031InaieKT6f-UsFJOdPvPOH2hDBzgAKdaUSHHaa7YmkbQhvnZQqmS1D-gVjL_kdqXfzwCwJSi2fk47M',
    gallery: [
      'https://lh6.googleusercontent.com/proxy/JiVDR2kAy-CSfv4ijwH9o2TUAAvKgG1L9Oz9xVviTG5031InaieKT6f-UsFJOdPvPOH2hDBzgAKdaUSHHaa7YmkbQhvnZQqmS1D-gVjL_kdqXfzwCwJSi2fk47M',
    ],
  },

  'chimbay': {
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBgDIDLHIrBnW3M5-SlseznUJzhYwe1xJ0A&s',
    gallery: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBgDIDLHIrBnW3M5-SlseznUJzhYwe1xJ0A&s'],
  },
};



export function getMonumentImage(id) {
  return monumentImages[id]?.cover || images.hero;
}

export function getMonumentGallery(id) {
  const entry = monumentImages[id];
  if (!entry) return [images.hero];
  return entry.gallery?.length ? entry.gallery : [entry.cover];
}

