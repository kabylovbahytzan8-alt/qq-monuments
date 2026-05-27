export const categories = [
  { id: 'fortresses', ru: 'Древние крепости', en: 'Ancient Fortresses', uz: 'Qadimiy qalʼalar', qq: 'Gadimgi qalalar', icon: 'Castle' },
  { id: 'mausoleums', ru: 'Мавзолеи и святыни', en: 'Mausoleums & Shrines', uz: 'Maqbaralar', qq: 'Mavzoleyler', icon: 'Landmark' },
  { id: 'nukus', ru: 'Памятники Нукуса', en: 'Nukus Monuments', uz: 'Nukus yodgorliklari', qq: 'Nókis yadgorliklari', icon: 'Building2' },
  { id: 'museums', ru: 'Музеи и культура', en: 'Museums & Culture', uz: 'Muzeylar', qq: 'Muzeyler', icon: 'GalleryHorizontalEnd' },
  { id: 'khorezm', ru: 'Крепости Хорезма', en: 'Khorezm Fortresses', uz: 'Xorazm qalʼalari', qq: 'Xorezm qalalari', icon: 'Shield' },
  { id: 'nature', ru: 'Памятники природы', en: 'Natural Monuments', uz: 'Tabiiy yodgorliklar', qq: 'Tábiyat yadgorliklari', icon: 'Mountain' },
  { id: 'settlements', ru: 'Исторические поселения', en: 'Historical Settlements', uz: 'Tarixiy shaharlar', qq: 'Tariyxıy qalalar', icon: 'Home' },
  { id: 'modern', ru: 'Современные памятники', en: 'Modern Monuments', uz: 'Zamonaviy yodgorliklar', qq: 'Házirgi yadgorliklar', icon: 'Trophy' },
  { id: 'other', ru: 'Другие объекты', en: 'Other Sites', uz: 'Boshqa obyektlar', qq: 'Basqa obyektler', icon: 'Compass' },
];

export const monuments = [
  // Fortresses
  {
    id: 'ayaz-kala',
    name: { ru: 'Аяз-Кала', en: 'Ayaz-Kala', uz: 'Ayoz-Qalʼa', qq: 'Ayaz-Qala' },
    category: 'fortresses', coords: [41.82, 60.83], century: 'IV-III веке до нашей эры', featured: true, wonder: true,
    facts: {
      ru: ['Состоит из трёх отдельных крепостей, построенных в разные эпохи', 'Названа в честь легендарного раба-воина Аяза из каракалпакского фольклора', 'С вершины открывается панорамный вид на древние каналы Хорезма'],
      en: ['Consists of three separate fortresses built in different eras', 'Named after the legendary slave-warrior Ayaz from Karakalpak folklore', 'From the top, panoramic views of the ancient canals of Khorezm open up'],
      uz: ['Turli davrlarda qurilgan uchta alohida qalʼadan iborat', 'Qoraqalpoq folkloridagi afsonaviy qul-jangchi Ayoz sharafiga nomlangan', 'Tepasidan Xorazmning qadimiy kanallari panoramasi ko\'rinadi'],
      qq: ['Túrli dáwirlerde qurilǵan úsh bólekli qaladan ibarat', 'Qaraqalpaq folklorındaǵı afsanawiy qul-jańgshi Ayaz sharafına ataǵan', 'Ústinan Xorezmniń gadimgi kanalları panoraması kórinedi'],
    },
  },
  {
    id: 'toprak-kala',
    name: { ru: 'Топрак-Кала', en: 'Toprak-Kala', uz: 'Toprak-Qalʼa', qq: 'Topıraq-Qala' },
    category: 'fortresses', coords: [41.93, 60.82], century: 'I-VI веке нашей эры', featured: true, wonder: true,
    facts: {
      ru: ['Была столицей древнехорезмийского государства в III–IV веках н.э.', 'Дворцовый комплекс включал более 100 залов, украшенных росписями и скульптурами', 'Здесь были найдены уникальные архивы хорезмийских документов на деревянных дощечках'],
      en: ['Was the capital of the ancient Khorezm state in the 3rd–4th centuries AD', 'The palace complex included more than 100 halls decorated with murals and sculptures', 'Unique archives of Khorezm documents on wooden tablets were found here'],
      uz: ['Milodiy III–IV asrlarda qadimgi Xorazm davlatining poytaxti bo\'lgan', 'Saroy majmuasi suratlar va haykaltaroshlik bilan bezatilgan 100 dan ortiq zallarni o\'z ichiga olgan', 'Bu yerda yog\'och taxtachalardagi Xorazm hujjatlarining noyob arxivlari topilgan'],
      qq: ['Biziń eramızdıń III–IV ásirlerinde gadimgi Xorezm mámleketiniń paytaxtı bolǵan', 'Saray majmuası suwret hám heykeltarashlıq benen bezlengen 100 den artıq zaldan ibarat bolǵan', 'Bul jerde aǵash taxtashalardaǵı Xorezm hújjetleriniń nádiri arxivleri tabılǵan'],
    },
  },
  {
    id: 'koi-krylgan-kala',
    name: { ru: 'Кой-Крылган-Кала', en: 'Koi Krylgan Kala', uz: 'Koy Qırılgʻan Qalʼa', qq: 'Koy Qırılǵan Qala' },
    category: 'fortresses', coords: [41.75, 60.78], century: 'IV веке до нашей эры', featured: true, wonder: true,
    facts: {
      ru: ['Имеет уникальную круглую форму диаметром около 44 метров — редкость для крепостей того времени', 'Предположительно служила зороастрийским храмом-усыпальницей и астрономической обсерваторией', 'Название переводится как «крепость погибших овец» — по местной легенде о трагедии, случившейся здесь'],
      en: ['Has a unique circular shape about 44 meters in diameter — rare for fortresses of that era', 'Believed to have served as a Zoroastrian funerary temple and astronomical observatory', 'The name translates as "fortress of the dead sheep" — from a local legend about a tragedy that occurred here'],
      uz: ['Taxminan 44 metr diametrli noyob dumaloq shakliga ega — o\'sha davrning qalʼalari uchun kamdan-kam uchraydigan holat', 'Zardushtiylik dafn ibodatxonasi va astronomik observatoriya vazifasini o\'tagan deb taxmin qilinadi', 'Nomi "o\'lgan qo\'ylar qalʼasi" deb tarjima qilinadi — bu yerda sodir bo\'lgan fojia haqidagi mahalliy afsonadan'],
      qq: ['Taxmınan 44 metr diametrli nádiri dógelek shaklge iye — ol dáwirdegi qalalar ushın siyrek ushırasadı', 'Zardushtıylıq dapn ibadatxanası hám astronomiyalıq observatoriya wazıypasın atqarǵan dep esaplanadı', 'Atı "ólgen qoylar qalası" dep awdarıladı — bul jerde bolıp ótken fajia haqqındaǵı jergilikli afsanadan'],
    },
  },
  {
    id: 'mizdakhan',
    name: { ru: 'Миздахкан', en: 'Mizdakhan', uz: 'Mizdaxon', qq: 'Mizdaxan' },
    category: 'fortresses', coords: [42.45, 59.60], century: 'IV веке до нашей эры', featured: true,
    facts: {
      ru: ['Один из крупнейших некрополей Средней Азии, использовавшийся более 2000 лет', 'По местному поверью, здесь похоронен библейский Каин — место паломничества для многих верующих', 'На территории находится мистический «шар времени» — кирпичная кладка, по преданию считающая годы до конца света'],
      en: ['One of the largest necropolises in Central Asia, used for over 2000 years', 'Local belief holds that the biblical Cain is buried here — a pilgrimage site for many believers', 'The territory contains a mystical "ball of time" — a brick structure said to count down the years until the end of the world'],
      uz: ['2000 yildan ortiq foydalanilgan O\'rta Osiyoning eng yirik nekropollaridan biri', 'Mahalliy e\'tiqodga ko\'ra, bu yerda Bibliyadan Qobil dafn etilgan — ko\'plab mo\'minlar uchun ziyoratgoh', 'Hududda mistik "vaqt to\'pi" mavjud — rivoyatga ko\'ra, qiyomatgacha yillarni sanaydigan g\'ishtli inshoot'],
      qq: ['2000 jıldan artıq paydalanılǵan Orta Aziyaniń eń iri nekropollarınan biri', 'Jergilikli isenim boyınsha, bul jerde Injildegi Qabil jayrılanǵan — kóp iseniwshiler ushın zıyarat orını', 'Hududda mistikalıq "waqıt sharı" bar — rivayatqa kóre, qıyametke shekem jılları esaplaydı'],
    },
  },
  {
    id: 'gyaur-kala',
    name: { ru: 'Гяур-Кала', en: 'Gyaur-Kala', uz: 'Gʻavr-Qalʼa', qq: 'Gavr-Qala' },
    category: 'fortresses', coords: [41.88, 60.69], century: 'VI-V веке до нашей эры', featured: false,
    facts: {
      ru: ['Название означает «крепость неверных» — так её нарекли после прихода ислама', 'Стены достигали высоты 8–10 метров и были оснащены башнями через каждые 20 метров', 'Внутри крепости обнаружены остатки жилых кварталов и зороастрийских храмов огня'],
      en: ['The name means "fortress of the infidels" — given after the arrival of Islam', 'The walls reached 8–10 meters in height and were equipped with towers every 20 meters', 'Inside the fortress, remains of residential quarters and Zoroastrian fire temples were found'],
      uz: ['Nomi "kofirlar qalʼasi" degan ma\'noni anglatadi — islom kelganidan so\'ng shunday nomlangan', 'Devorlar 8–10 metr balandlikka yetgan va har 20 metrda minoralarga ega bo\'lgan', 'Qalʼa ichida turar-joy kvartallarining qoldiqlari va zardushtiylik olov ibodatxonalari aniqlangan'],
      qq: ['Atı "kafirler qalası" degen mánisti bildirredi — islam kelgennen soń atanǵan', 'Diywalar 8–10 metr biyiklikke jetken hám her 20 metrde minaʼlar ornalastırılǵan', 'Qala ishinde turarjay kvartallarınıń qaldıqları hám zardushtıylıq ot ibadatxanaları tabılǵan'],
    },
  },
  {
    id: 'janbas-kala',
    name: { ru: 'Джанбас-Кала', en: 'Janbas-Kala', uz: 'Jonbos-Qalʼa', qq: 'Janbas-Qala' },
    category: 'fortresses', coords: [41.80, 60.78], century: 'IV веке до нашей эры', featured: false,
    facts: {
      ru: ['Одна из немногих крепостей Хорезма без башен — защита обеспечивалась особой конструкцией стен со стрелковыми галереями', 'Площадь внутренней территории составляет около 9 гектаров', 'Найденная керамика указывает на тесные торговые связи с Грецией и Персией'],
      en: ['One of the few Khorezm fortresses without towers — defense was provided by a special wall design with shooting galleries', 'The area of the inner territory is about 9 hectares', 'Pottery found indicates close trade links with Greece and Persia'],
      uz: ['Xorazmning minorasiz kam sonli qalʼalaridan biri — mudofaa maxsus o\'qotar galereyali devor konstruksiyasi bilan ta\'minlangan', 'Ichki hududning maydoni taxminan 9 gektarni tashkil etadi', 'Topilgan kulolchilik buyumlari Gretsiya va Eron bilan yaqin savdo aloqalarini ko\'rsatadi'],
      qq: ['Xorezmniń minaʼsız az sanawlı qalalarınan biri — qorǵaw atıw galereyalı arnawlı diywalar konstruksiyası arqalı támiyinlengen', 'Ishki hududtıń maydanı taxmınan 9 gektar', 'Tabılǵan kulalshlıq buyımları Gretsiya hám Iran menen jaqın sawda baylanısların kórsetedi'],
    },
  },
  {
    id: 'big-guldursun',
    name: { ru: 'Большой Гулдурсун', en: 'Big Guldursun', uz: 'Katta Guldursun', qq: 'Ullı Guldursun' },
    category: 'fortresses', coords: [41.85, 60.75], century: 'I веке до нашей эры', featured: false,
    facts: {
      ru: ['Одна из крупнейших крепостей региона — площадь превышает 18 гектаров', 'По преданию, была последней столицей хорезмийских шахов перед монгольским нашествием', 'В народных легендах упоминается как место несметных скрытых сокровищ'],
      en: ['One of the largest fortresses in the region — area exceeds 18 hectares', 'According to legend, it was the last capital of the Khorezm shahs before the Mongol invasion', 'Folk legends mention it as a place of immense hidden treasures'],
      uz: ['Mintaqaning eng yirik qalʼalaridan biri — maydoni 18 gektardan oshadi', 'Rivoyatga ko\'ra, mo\'g\'ul bosqinidan oldin Xorazm shohlari so\'nggi poytaxti bo\'lgan', 'Xalq afsonalarida ko\'plab yashirin xazinalar joyi sifatida tilga olinadi'],
      qq: ['Aymaqdıń eń iri qalalarınan biri — maydanı 18 gektardan artıq', 'Rivayatqa kóre, moǵol biylewi aldında Xorezm shahlarınıń aqırǵı paytaxtı bolǵan', 'Xalıq afsanalarında sansız jasırın xazinalar orını retinde ataladı'],
    },
  },
  {
    id: 'small-guldursun',
    name: { ru: 'Малый Гулдурсун', en: 'Small Guldursun', uz: 'Kichik Guldursun', qq: 'Kishi Guldursun' },
    category: 'fortresses', coords: [41.84, 60.76], century: 'I веке до нашей эры',
    facts: {
      ru: ['Служила форпостом и сторожевой крепостью для соседнего Большого Гулдурсуна', 'Расположена на возвышенности, что обеспечивало визуальную связь с другими крепостями', 'Обнаружены следы пожара, свидетельствующие о военном разрушении'],
      en: ['Served as an outpost and watchtower fortress for the neighboring Big Guldursun', 'Located on high ground, providing visual communication with other fortresses', 'Traces of fire were found, indicating military destruction'],
      uz: ['Qo\'shni Katta Guldursun uchun chegara postı va qo\'riqchi qalʼa vazifasini bajargan', 'Balandlikda joylashgan bo\'lib, boshqa qalʼalar bilan vizual aloqani ta\'minlagan', 'Harbiy vayronagarchilikni ko\'rsatuvchi yong\'in izlari aniqlangan'],
      qq: ['Qońsı Ullı Guldursun ushın shek postı hám qárewil qala wazıypasın atqarǵan', 'Biyiklikte ornalasqan, basqa qalalar menen kóriw baylanısın támiyinlegen', 'Harbiy buzılıwdı kórsetiwshi ot izleri tabılǵan'],
    },
  },
  {
    id: 'kyzyl-kala',
    name: { ru: 'Кызыл-Кала', en: 'Kyzyl-Kala', uz: 'Qizil-Qalʼa', qq: 'Qızıl-Qala' },
    category: 'fortresses', coords: [41.90, 60.80], century: 'I-II веке нашей эры',
    facts: {
      ru: ['Название «Красная крепость» связано с характерным цветом обожжённого кирпича', 'Хорошо сохранившиеся стены достигают высоты 8 метров в некоторых местах', 'Использовалась как военный форпост на пути торговых и военных экспедиций'],
      en: ['The name "Red Fortress" is associated with the characteristic color of fired brick', 'Well-preserved walls reach 8 meters in height in some places', 'Used as a military outpost on the route of trade and military expeditions'],
      uz: ['«Qizil qalʼa» nomi pishirilgan g\'ishtning xarakterli rangiga bog\'liq', 'Yaxshi saqlanib qolgan devorlar ba\'zi joylarda 8 metr balandlikka yetadi', 'Savdo va harbiy ekspeditsiyalar yo\'lida harbiy chegara postı sifatida foydalanilgan'],
      qq: ['«Qızıl qala» atı pısırılǵan kerpishtıń xarakterli reńine baylanıslı', 'Jaqsı saqlanǵan diywalar ayırım jerlerinde 8 metr biyiklikke jetedi', 'Sawda hám harbiy ekspeditsiyalar jolında harbiy shek postı retinde paydalanılǵan'],
    },
  },
  {
    id: 'pil-kala',
    name: { ru: 'Пиль-Кала', en: 'Pil-Kala', uz: 'Pil-Qalʼa', qq: 'Pil-Qala' },
    category: 'fortresses', coords: [41.78, 60.72], century: 'IV-III веке до нашей эры',
    facts: {
      ru: ['Название переводится как «Слоновья крепость» — возможно, связано с легендами о боевых слонах', 'Имеет нестандартную прямоугольную планировку с мощными угловыми башнями', 'Раскопки выявили следы металлургического производства внутри крепости'],
      en: ['The name translates as "Elephant Fortress" — possibly linked to legends about war elephants', 'Has a non-standard rectangular layout with powerful corner towers', 'Excavations revealed traces of metallurgical production inside the fortress'],
      uz: ['Nomi "Fil qalʼasi" deb tarjima qilinadi — ehtimol, jangovar fillar haqidagi afsonalar bilan bog\'liq', 'Kuchli burchak minoralari bilan nostandart to\'g\'ri burchakli rejalashtirish mavjud', 'Qazishmalar qalʼa ichida metallurgiya ishlab chiqarishi izlarini aniqladi'],
      qq: ['Atı "Pil qalası" dep awdarıladı — múmkin, urıs piller haqqındaǵı afsanalar menen baylanıslı', 'Qúwatli búrısh minaʼları menen standart emes tórtbúrısh jobalamasına iye', 'Qazıwlar qala ishinde metallurgiya óndirisiniń izlerin aniqladi'],
    },
  },
  {
    id: 'bazar-kala',
    name: { ru: 'Базар-Кала', en: 'Bazar-Kala', uz: 'Bozor-Qalʼa', qq: 'Bazar-Qala' },
    category: 'fortresses', coords: [41.82, 60.70], century: 'IV веке до нашей эры',
    facts: {
      ru: ['По предположению учёных, служила крупным торговым центром на перекрёстке древних дорог', 'Рядом обнаружены остатки древних ирригационных каналов, орошавших окрестные поля', 'Найденные монеты говорят о торговых связях с греко-бактрийскими государствами'],
      en: ['According to scholars, it served as a major trading center at the crossroads of ancient roads', 'Remains of ancient irrigation canals that watered the surrounding fields were found nearby', 'Coins found suggest trade links with Greco-Bactrian states'],
      uz: ['Olimlarning taxminiga ko\'ra, qadimgi yo\'llar kesishmasida yirik savdo markazi vazifasini bajargan', 'Yaqin atrofda atrofdagi dalalarni sug\'organ qadimiy sug\'orish kanallarining qoldiqlari topilgan', 'Topilgan tangalar Greko-Baktriya davlatlari bilan savdo aloqalarini ko\'rsatadi'],
      qq: ['Alımlar pikirine kóre, gadimgi jollar ayırıqında iri sawda orayı wazıypasın atqarǵan', 'Jaqın ańlatda atraptaǵı dalalarını suwarǵan gadimgi suwlandırıw kanallarınıń qaldıqları tabılǵan', 'Tabılǵan tıyınlar Greko-Baktriya mámleketleri menen sawda baylanısların kórsetedi'],
    },
  },
  {
    id: 'angka-kala',
    name: { ru: 'Ангка-Кала', en: 'Angka-Kala', uz: 'Angka-Qalʼa', qq: 'Aŋqa-Qala' },
    category: 'fortresses', coords: [41.76, 60.65], century: 'III веке до нашей эры',
    facts: {
      ru: ['Расположена на берегу древнего высохшего русла Амударьи', 'Стены сложены из сырцового кирпича стандартного хорезмийского формата', 'Одна из менее изученных крепостей региона — планомерные раскопки здесь ещё не проводились'],
      en: ['Located on the bank of the ancient dried-up bed of the Amu Darya', 'Walls are built from adobe brick of standard Khorezm format', 'One of the less studied fortresses in the region — systematic excavations have not yet been conducted here'],
      uz: ['Amudaryoning qadimgi qurib qolgan o\'zanining qirg\'og\'ida joylashgan', 'Devorlar standart Xorazm formatidagi xom g\'ishtdan qurilgan', 'Mintaqaning kam o\'rganilgan qalʼalaridan biri — bu yerda hali tizimli qazishmalar o\'tkazilmagan'],
      qq: ['Ámiwdáryanıń gadimgi quriǵan ózeni jağasında ornalasqan', 'Diywalar standart Xorezm formatlı shiy kerpiishten qurılǵan', 'Aymaqdıń az úyrenilgen qalalarınan biri — bul jerde háliy sistemalı qazıwlar ótkerilmegen'],
    },
  },
  {
    id: 'kurgashin-kala',
    name: { ru: 'Кургашин-Кала', en: 'Kurgashin-Kala', uz: 'Kurgoshin-Qalʼa', qq: 'Qurǵashın-Qala' },
    category: 'fortresses', coords: [41.79, 60.68], century: 'II веке до нашей эры',
    facts: {
      ru: ['Название связывают со словом «свинец» — возможно, здесь добывали или обрабатывали этот металл', 'Имеет хорошо читаемую систему оборонительных рвов вокруг стен', 'В окрестностях найдены следы древних поселений, зависевших от этой крепости'],
      en: ['The name is associated with the word "lead" — possibly metal was mined or processed here', 'Has a well-defined system of defensive moats around the walls', 'Traces of ancient settlements that depended on this fortress were found in the area'],
      uz: ['Nomi "qo\'rg\'oshin" so\'zi bilan bog\'liq — ehtimol, bu yerda ushbu metal qazib olingan yoki qayta ishlangan', 'Devorlar atrofida yaxshi o\'qiladigan himoya xandaqlari tizimi mavjud', 'Atrofda ushbu qalʼaga bog\'liq qadimgi aholi punktlari izlari topilgan'],
      qq: ['Atı «qorǵashin» sózi menen baylanıslı — múmkin, bul jerde bul metal qazılǵan yamasa óńdelen', 'Diywalar ańlatında jaqsı kórinetın qorǵaw or sisteması bar', 'Atraptа bul qalaǵa baylanıslı gadimgi mekenlestiriwler izleri tabılǵan'],
    },
  },
  {
    id: 'burly-kala',
    name: { ru: 'Бурлы-Кала', en: 'Burly-Kala', uz: 'Burliq-Qalʼa', qq: 'Burlı-Qala' },
    category: 'fortresses', coords: [41.73, 60.60], century: 'IV веке до нашей эры',
    facts: {
      ru: ['Одна из самых отдалённых крепостей хорезмийской системы обороны', 'Расположена вблизи древних переправ через Амударью, что делало её стратегически важной', 'Небольшие размеры указывают на функцию пограничного гарнизона'],
      en: ['One of the most remote fortresses of the Khorezm defensive system', 'Located near ancient river crossings of the Amu Darya, making it strategically important', 'Small size indicates the function of a border garrison'],
      uz: ['Xorazmning mudofaa tizimining eng uzoq qalʼalaridan biri', 'Amudaryaning qadimiy kechuvlari yaqinida joylashgan bo\'lib, uni strategik jihatdan muhim qilgan', 'Kichik o\'lchami chegara garnizoni vazifasini ko\'rsatadi'],
      qq: ['Xorezmniń qorǵanıs sistemasınıń eń alıs qalalarınan biri', 'Ámiwdáryanıń gadimgi keshiwleri jaqınında ornalasqan, bul onı strategiyalıq jaqtan áhmiyetli etken', 'Kishi ólshemi shek garnizoni wazıypasın kórsetedi'],
    },
  },
  {
    id: 'aqshakhan-kala',
    name: { ru: 'Акшахан-Кала', en: 'Aqshakhan-Kala', uz: 'Oqshaxon-Qalʼa', qq: 'Aqshaxan-Qala' },
    category: 'fortresses', coords: [41.86, 60.77], century: 'V-IV веке до нашей эры',
    facts: {
      ru: ['Одна из древнейших крепостей Хорезма — её возраст превышает 2500 лет', 'Обнаружены следы перестройки в несколько этапов, что говорит о длительном использовании', 'Рядом найдены остатки зороастрийского алтаря — центра религиозной жизни поселения'],
      en: ['One of the oldest fortresses of Khorezm — its age exceeds 2500 years', 'Traces of reconstruction in several stages were found, indicating long-term use', 'Remains of a Zoroastrian altar — the center of religious life of the settlement — were found nearby'],
      uz: ['Xorazmning eng qadimiy qalʼalaridan biri — yoshi 2500 yildan oshadi', 'Bir necha bosqichda qayta qurilish izlari aniqlangan, bu uzoq muddatli foydalanishdan dalolat beradi', 'Yaqinida aholining diniy hayoti markazi — zardushtiylik qurbongohining qoldiqlari topilgan'],
      qq: ['Xorezmniń eń gadimgi qalalarınan biri — jası 2500 jıldan artıq', 'Bir neshe basqıshta qayta qurılıs izleri tabılǵan, bul uzaq múddetli paydalanıwdan dalálat beredi', 'Jaqınında halıqtıń dini ómiri orayı — zardushtıylıq qurbangediyiniń qaldıqları tabılǵan'],
    },
  },
  {
    id: 'chilpyk',
    name: { ru: 'Шылпык', en: 'Chilpyk', uz: 'Shilpiq', qq: 'Shılpıq' },
    category: 'fortresses', coords: [42.00, 60.33], century: 'I-IV веке нашей эры', featured: true, wonder: true,
    facts: {
      ru: ['Круглая башня диаметром 65 метров возведена на вершине 40-метрового холма', 'Являлась зороастрийской «башней молчания» — местом ритуального погребения', 'С вершины в ясную погоду видны берега Амударьи и руины соседних крепостей'],
      en: ['A round tower 65 meters in diameter was built on top of a 40-meter hill', 'It was a Zoroastrian "Tower of Silence" — a place of ritual burial', 'From the top, on a clear day, the banks of the Amu Darya and ruins of neighboring fortresses are visible'],
      uz: ['65 metr diametrli dumaloq minora 40 metrli tepalik cho\'qqisiga qurilgan', 'Zardushtiylik "sukunat minorasi" — marosim dafn joyi bo\'lgan', 'Ochiq ob-havoda tepasidan Amudaryo qirg\'oqlari va qo\'shni qalʼalar xarobalari ko\'rinadi'],
      qq: ['65 metr diametrli dógelek minara 40 metrlik tóbeniń shıńına qurılǵan', 'Zardushtıylıq "jimlik minarası" — ritualıq dapn orını bolǵan', 'Ashıq awada ústinan Ámiwdárya jaqaları hám qońsı qalalar xarabaları kórinedi'],
    },
  },
  {
    id: 'duman-kala',
    name: { ru: 'Думан-Кала', en: 'Duman-Kala', uz: 'Duman-Qalʼa', qq: 'Duman-Qala' },
    category: 'fortresses', coords: [41.70, 60.55], century: 'III веке до нашей эры',
    facts: {
      ru: ['Название «Туманная крепость» связано с утренними туманами, стелющимися в низине', 'Исследована лишь частично — большая часть территории ещё ждёт раскопок', 'Найденные орудия труда свидетельствуют о развитом ремесленном производстве внутри крепости'],
      en: ['The name "Foggy Fortress" is associated with morning mists that roll through the lowland', 'Only partially studied — most of the territory is still waiting for excavation', 'Found tools indicate developed craft production inside the fortress'],
      uz: ['«Tumanli qalʼa» nomi pasttekislikdagi ertalabki tumanlarga bog\'liq', 'Faqat qisman o\'rganilgan — hududning katta qismi hali qazishmalarni kutmoqda', 'Topilgan mehnat qurollari qalʼa ichidagi rivojlangan hunarmandchilik ishlab chiqarishidan dalolat beradi'],
      qq: ['«Tuman qala» atı pasttekislikteǵi ertańgi tumanlarǵa baylanıslı', 'Tek qısman úyrenilgen — hududtıń kóp bólegi háliy qazıwlardı kútpekte', 'Tabılǵan miynet quralları qala ishindegi rawajlanǵan hunarmentshilik óndirisinen dalálat beredi'],
    },
  },
  {
    id: 'davkesken',
    name: { ru: 'Давкескен', en: 'Davkesken', uz: 'Dovkesken', qq: 'Dawkesken' },
    category: 'fortresses', coords: [42.10, 58.80], century: 'XII в.',
    facts: {
      ru: ['Средневековая крепость на древнем пути из Хорезма к берегам Каспийского моря', 'Обнаружены следы разрушения, предположительно связанного с монгольским нашествием XIII века', 'Рядом находится средневековый некрополь с богато украшенными надгробиями'],
      en: ['A medieval fortress on the ancient route from Khorezm to the Caspian Sea shores', 'Traces of destruction presumably linked to the Mongol invasion of the 13th century were found', 'A medieval necropolis with richly decorated tombstones is located nearby'],
      uz: ['Xorazmdan Kaspiy dengizi sohillariga boradigan qadimiy yo\'ldagi o\'rta asrlar qalʼasi', 'XIII asr mo\'g\'ul bosqini bilan bog\'liq deb taxmin qilingan vayronagarchilik izlari aniqlangan', 'Yaqinida boy bezatilgan qabr toshlari bilan o\'rta asrlar nekropoli joylashgan'],
      qq: ['Xorezmnen Kaspiy teńizi jaqalarına baratuǵın gadimgi joldaǵı orta ásir qalası', 'XIII ásir moǵol biylewi menen baylanıslı dep esaplanǵan buzılıs izleri tabılǵan', 'Jaqınında bay bezlengen qabır tasları menen orta ásir nekropolı ornalasqan'],
    },
  },
  {
    id: 'qavat-kala',
    name: { ru: 'Кават-Кала', en: 'Qavat-Kala', uz: 'Qavat-Qalʼa', qq: 'Qavat-Qala' },
    category: 'fortresses', coords: [41.95, 60.75], century: 'XII-XIII в.',
    facts: {
      ru: ['Одна из последних крупных крепостей, построенных до монгольского завоевания', 'Мощные стены с полукруглыми башнями свидетельствуют о высоком уровне военного строительства', 'После разрушения монголами так и не была полностью восстановлена'],
      en: ['One of the last major fortresses built before the Mongol conquest', 'Powerful walls with semicircular towers testify to a high level of military construction', 'After being destroyed by the Mongols, it was never fully restored'],
      uz: ['Mo\'g\'ul bosqinidan oldin qurilgan so\'nggi yirik qalʼalardan biri', 'Yarim dumaloq minoralari bo\'lgan kuchli devorlar harbiy qurilishning yuqori darajasidan dalolat beradi', 'Mo\'g\'ullar tomonidan vayron qilinganidan keyin hech qachon to\'liq tiklanmadi'],
      qq: ['Moǵol biylewinen aldın qurilǵan aqırǵı iri qalalardan biri', 'Yarim dógelek minaʼları menen qúwatli diywalar harbiy qurılıstıń joqarı dárejesin kórsertedi', 'Moǵollar tárepinen buzılǵannan soń heshqashan tolıq tiklenedi'],
    },
  },
  {
    id: 'kirk-kyz',
    name: { ru: 'Крепость Кырк-Кыз', en: 'Kirk-Kyz Fortress', uz: 'Qirq-Qiz qalʼasi', qq: 'Qırq-Qız qalası' },
    category: 'fortresses', coords: [41.87, 60.73], century: 'IX-X в.',
    facts: {
      ru: ['Название «Сорок девушек» связано с распространённой в Средней Азии легендой о воинах-амазонках', 'Относится к раннесредневековому периоду — уникальна для Каракалпакстана', 'Архитектурный план крепости отличается от классических хорезмийских образцов'],
      en: ['The name "Forty Girls" is linked to a widespread Central Asian legend about warrior-Amazons', 'Belongs to the early medieval period — unique for Karakalpakstan', 'The architectural plan of the fortress differs from classical Khorezm examples'],
      uz: ['«Qirq qiz» nomi O\'rta Osiyoda keng tarqalgan amazonka-jangchilar haqidagi afsona bilan bog\'liq', 'Erta o\'rta asrlar davriga tegishli — Qoraqalpog\'iston uchun noyob', 'Qalʼaning me\'moriy rejasi klassik Xorazm namunalaridan farq qiladi'],
      qq: ['«Qırq qız» atı Orta Aziyada keń tarqalǵan amazonka-jańgshilar haqqındaǵı afsana menen baylanıslı', 'Erte orta ásirler dáwirine tiyisli — Qaraqalpaqstan ushın nádiri', 'Qalaniń arxitekturalıq jobası klassikalıq Xorezm úlgilerinan parıqlanadı'],
    },
  },

  // Mausoleums
  {
    id: 'sultan-uvays',
    name: { ru: 'Комплекс Султан Увайс Бобо', en: 'Sulton Uvays Bobo Complex', uz: 'Sulton Uvays Bobo', qq: 'Sultan Uvays Baba' },
    category: 'mausoleums', coords: [42.22, 57.85], century: 'XII-XIV в.', featured: true, wonder: true,
    facts: {
      ru: ['Один из наиболее почитаемых исламских святынь в Центральной Азии', 'Комплекс включает мавзолей, мечеть и источник с целебной водой', 'Ежегодно тысячи паломников со всей Средней Азии совершают сюда зиярат'],
      en: ['One of the most revered Islamic shrines in Central Asia', 'The complex includes a mausoleum, mosque, and a spring with healing water', 'Thousands of pilgrims from all over Central Asia make a ziyarat here annually'],
      uz: ['Markaziy Osiyodagi eng muqaddas islom ziyoratgohlaridan biri', 'Majmua maqbara, masjid va shifobaxsh buloqni o\'z ichiga oladi', 'Har yili butun O\'rta Osiyodan minglab ziyoratchilar bu yerga ziyorat qiladilar'],
      qq: ['Orta Aziyaniń eń muqaddes islam zıyarat orınlarınan biri', 'Majmua mazar, meshit hám dáriyalıq suı bar bulaqdı óz ishine aladı', 'Jıl sayın pútkil Orta Aziyadan mıńlaǵan zıyaratshılar bul jerge keledi'],
    },
  },
  {
    id: 'mazlumkhan-sulu',
    name: { ru: 'Мавзолей Мазлумхан-Сулу', en: 'Mazlumkhan Sulu Mausoleum', uz: 'Mazlumxon Sulu', qq: 'Mazlumxan Sulıw' },
    category: 'mausoleums', coords: [42.45, 59.60], century: 'XII-XIV в.', featured: true, wonder: true,
    facts: {
      ru: ['Посвящён легендарной красавице Мазлумхан, чья история вдохновила многих поэтов', 'Резное ганчевое убранство интерьера — образец средневекового декоративного искусства', 'Внутри сохранились оригинальные росписи XII–XIV веков в превосходном состоянии'],
      en: ['Dedicated to the legendary beauty Mazlumkhan, whose story inspired many poets', 'The carved ganch interior decoration is an example of medieval decorative art', 'Original murals from the 12th–14th centuries have survived inside in excellent condition'],
      uz: ['Ko\'plab shoirlarni ilhomlantirgan afsonaviy go\'zal Mazlumxonga bag\'ishlangan', 'O\'yma ganchli ichki bezak o\'rta asrlar dekorativ san\'atining namunasidir', 'Ichida XII–XIV asrlarga oid original rasmlar ajoyib holatda saqlanib qolgan'],
      qq: ['Kóp aqınlardı ilhamlandırǵan afsanawiy gúzel Mazlumxanǵa arnalǵan', 'Oyma ganjlı ishki bezek orta ásirler bezew óneriniń úlgisi', 'Ishinde XII–XIV ásirlerge tiyisli original suwretler ajayıp halda saqlanǵan'],
    },
  },
  {
    id: 'shamun-nabi',
    name: { ru: 'Мавзолей Шамун-Наби', en: 'Shamun Nabi Mausoleum', uz: 'Shamun Nabiy', qq: 'Shamun Nabiy' },
    category: 'mausoleums', coords: [42.45, 59.61], century: 'X в.',
    facts: {
      ru: ['По преданию, здесь покоится пророк Самсон — место почитается иудеями, христианами и мусульманами', 'Обладает уникальным захоронением длиной около 18 метров — одним из самых длинных в мире', 'Служит местом паломничества для представителей трёх авраамических религий'],
      en: ['According to legend, the prophet Samson rests here — the site is revered by Jews, Christians, and Muslims', 'Has a unique burial about 18 meters long — one of the longest in the world', 'Serves as a pilgrimage site for followers of three Abrahamic religions'],
      uz: ['Rivoyatga ko\'ra, bu yerda Shomun payg\'ambar yotadi — joy yahudiylar, nasroniylar va musulmonlar tomonidan hurmat qilinadi', 'Uzunligi taxminan 18 metr bo\'lgan noyob mozorga ega — dunyodagi eng uzunlardan biri', 'Uchta ibrohimiy din vakillariga ziyorat joyi bo\'lib xizmat qiladi'],
      qq: ['Rivayatqa kóre, bul jerde Shamun payǵambar jayrılanǵan — orın yahudiyler, xristiyanlar hám musulmanlar tárepinen húrmet kóredi', 'Uzınlıǵı taxmınan 18 metr bolǵan nádiri mazar — dúnyadaǵı eń uzınlardan biri', 'Úsh ibrohimiy din ókilleri ushın zıyarat orını retinde xızmet etedi'],
    },
  },
  {
    id: 'khoja-ishan',
    name: { ru: 'Мавзолей Ходжа-Ишан-Бобо', en: 'Khoja Ishan Bobo Mausoleum', uz: 'Xoja Eshon Bobo', qq: 'Xoja İshan Baba' },
    category: 'mausoleums', coords: [42.20, 59.50], century: 'XIV в.',
    facts: {
      ru: ['Посвящён местному суфийскому учителю, оставившему глубокий след в духовной жизни региона', 'Архитектура мавзолея сочетает черты хорезмийской и тимуридской школ зодчества', 'Паломники из Узбекистана и Казахстана приезжают сюда в дни религиозных праздников'],
      en: ['Dedicated to a local Sufi teacher who left a deep mark on the spiritual life of the region', 'The mausoleum architecture combines features of the Khorezm and Timurid architectural schools', 'Pilgrims from Uzbekistan and Kazakhstan come here during religious holidays'],
      uz: ['Mintaqaning ruhiy hayotida chuqur iz qoldirgan mahalliy so\'fiy ustoz sharafiga qurilgan', 'Maqbara me\'morchiligi Xorazm va Temuriylar me\'morchilik maktablarining xususiyatlarini birlashtiradi', 'O\'zbekiston va Qozog\'istondan ziyoratchilar diniy bayramlar kunlarida bu yerga keladi'],
      qq: ['Aymaq ruwxıy ómirinde teri iz qaldırǵan jergilikli sufiy ustazdıń xurmetine qurilǵan', 'Mazardıń arxitekturası Xorezm hám Temuriyler arxitektura mektepleriniń xususiyatların biriktiredi', 'Ózbekstan hám Qazaqstannan zıyaratshılar dini bayramlar kúnleri bul jerge keledi'],
    },
  },
  {
    id: 'keshirmes-baba',
    name: { ru: 'Мавзолей Кеширмес-Баба', en: 'Keshirmes Baba Mausoleum', uz: 'Keshirmas Boba', qq: 'Keshirmes Baba' },
    category: 'mausoleums', coords: [42.30, 59.40], century: 'XV в.',
    facts: {
      ru: ['Название переводится как «Непрощающий отец» — связано с суровой легендой о праведнике', 'Простая архитектура мавзолея контрастирует с богатым внутренним убранством', 'Местные жители считают это место целебным и приходят сюда молиться об исцелении'],
      en: ['The name translates as "Unforgiving Father" — linked to a stern legend about a righteous man', 'The simple architecture of the mausoleum contrasts with the rich interior decoration', 'Local residents consider this place healing and come here to pray for recovery'],
      uz: ['Nomi "kechirmaydigan ota" deb tarjima qilinadi — solih inson haqidagi qattiq afsona bilan bog\'liq', 'Maqbaraning oddiy me\'morchiligi boy ichki bezak bilan zid keladi', 'Mahalliy aholi bu joyni shifobaxsh deb biladi va sog\'ayish uchun ibodat qilgani keladi'],
      qq: ['Atı "keshirmeytuǵın ata" dep awdarıladı — salıh insan haqqındaǵı qattı afsana menen baylanıslı', 'Mazardıń sadde arxitekturası bay ishki bezek penen zıtlasadı', 'Jergilikli halıq bul jerdı shipalı dep biledi hám sawıǵıw ushın ibadat etiwge keledi'],
    },
  },
  {
    id: 'erejep-khalifa',
    name: { ru: 'Мечеть Эрежеп-Халифа', en: 'Erejep Khalifa Mosque', uz: 'Erajap Xalifa masjidi', qq: 'Erejep Xalıypa meshiti' },
    category: 'mausoleums', coords: [42.35, 59.55], century: 'XVI в.',
    facts: {
      ru: ['Одна из немногих сохранившихся исторических мечетей Каракалпакстана', 'Построена в честь известного исламского проповедника, распространявшего ислам в регионе', 'Деревянные колонны с резьбой представляют уникальный образец каракалпакского деревянного зодчества'],
      en: ['One of the few surviving historic mosques of Karakalpakstan', 'Built in honor of a famous Islamic preacher who spread Islam in the region', 'Wooden columns with carvings represent a unique example of Karakalpak wooden architecture'],
      uz: ['Qoraqalpog\'istonning saqlanib qolgan tarixiy masjidlarining kamidan biri', 'Mintaqada islomni tarqatgan mashhur islom voizi sharafiga qurilgan', 'O\'ymakorlik bilan ishlangan yog\'och ustunlar qoraqalpoq yog\'och me\'morchiligining noyob namunasidir'],
      qq: ['Qaraqalpaqstannıń saqlanǵan tariyxıy meshitleriniń azınan biri', 'Aymaqta islamdı tarqatqan belgili islam dáwatshisiniń xurmetine qurilǵan', 'Oymakorshılıq menen islengen aǵash baganallar qaraqalpaq aǵash arxitekturasınıń nádiri úlgisi'],
    },
  },
  {
    id: 'hakim-ata',
    name: { ru: 'Комплекс Хаким-Ата', en: 'Hakim Ata Complex', uz: 'Hakim Ota', qq: 'Hakim Ata' },
    category: 'mausoleums', coords: [42.25, 59.45], century: 'XII в.',
    facts: {
      ru: ['Посвящён Сулейману Бакыргани — великому суфийскому поэту и ученику Ахмада Яссави', 'Является одним из главных духовных центров для мусульман Каракалпакстана и Казахстана', 'Комплекс неоднократно реставрировался и расширялся в XIV–XIX веках'],
      en: ['Dedicated to Suleiman Bakyrgani — a great Sufi poet and student of Ahmad Yasawi', 'Is one of the main spiritual centers for Muslims of Karakalpakstan and Kazakhstan', 'The complex was repeatedly restored and expanded in the 14th–19th centuries'],
      uz: ['Ahmad Yassaviyning buyuk so\'fiy shoiri va shogirdi Sulaymon Boqirg\'oniyga bag\'ishlangan', 'Qoraqalpog\'iston va Qozog\'iston musulmonlari uchun asosiy ma\'naviy markazlardan biri', 'Majmua XIV–XIX asrlarda bir necha bor qayta ta\'mirlangan va kengaytirilgan'],
      qq: ['Ahmad Yasawıdıń ulıwma sufiy aqını hám shákirti Suleymanǵa arnalǵan', 'Qaraqalpaqstan hám Qazaqstan musulmanları ushın tiykarǵı ruwxıy oraylardan biri', 'Majmua XIV–XIX ásirlerinde bir neshe ret qayta tiklendi hám keńeytirildi'],
    },
  },
  {
    id: 'mizdakhan-necropolis',
    name: { ru: 'Некрополь Миздахкан', en: 'Mizdakhan Necropolis', uz: 'Mizdaxon nekropolisi', qq: 'Mizdaxan nekropolisi' },
    category: 'mausoleums', coords: [42.45, 59.59], century: 'IV веке до нашей эры',
    facts: {
      ru: ['Один из древнейших погребальных комплексов Средней Азии, охватывающий площадь более 200 гектаров', 'Здесь прослеживается непрерывная традиция захоронений от эпохи зороастризма до наших дней', 'Содержит мавзолеи, относящиеся к нескольким историческим периодам — от античности до XIX века'],
      en: ['One of the oldest burial complexes in Central Asia, covering an area of more than 200 hectares', 'A continuous tradition of burials from the Zoroastrian era to the present day is traced here', 'Contains mausoleums from several historical periods — from antiquity to the 19th century'],
      uz: ['200 gektardan ortiq maydonni qamrab olgan O\'rta Osiyoning eng qadimiy dafn majmualaridan biri', 'Bu yerda zardushtiylik davridan hozirgi kungacha uzluksiz dafn an\'anasi kuzatiladi', 'Qadimiyatdan XIX asrgacha bir necha tarixiy davrga oid maqbaralarni o\'z ichiga oladi'],
      qq: ['200 gektardan artıq maydandı qamlap alǵan Orta Aziyaniń eń gadimgi dapn majmualarınan biri', 'Bul jerde zardushtıylıq dáwirinen házirgi kúnge shekem úzliksiz dapn dástúri izlenedi', 'Gadimgilikten XIX ásirge shekem bir neshe tariyxıy dáwirge tiyisli mazarlar bar'],
    },
  },
  {
    id: 'jomart-kassab',
    name: { ru: 'Холм Жомарт-Кассаб', en: 'Jomart Kassab Hill', uz: 'Joʻmart Qassob tepasi', qq: 'Jomart Qassab tóbesi' },
    category: 'mausoleums', coords: [42.44, 59.58], century: 'X в.',
    facts: {
      ru: ['По легенде, здесь похоронен щедрый мясник Жомарт, раздававший мясо бедным', 'Является частью обширного некропольного комплекса Миздахкан', 'Народная традиция посещать это место сохранилась на протяжении многих веков'],
      en: ['According to legend, the generous butcher Jomart, who gave meat to the poor, is buried here', 'Is part of the extensive necropolis complex of Mizdakhan', 'The folk tradition of visiting this place has been preserved for many centuries'],
      uz: ['Rivoyatga ko\'ra, bu yerda kambag\'allarga go\'sht ulashgan saxiy qassob Jo\'mart dafn etilgan', 'Mizdaxon keng nekropolli majmuasining bir qismidir', 'Bu joyni ziyorat qilishning xalq an\'anasi ko\'p asrlar davomida saqlanib kelgan'],
      qq: ['Rivayatqa kóre, bul jerde kederlerge et úlesken saxı qasap Jomart jayrılanǵan', 'Mizdaxan keń nekropol majmuasınıń bir bólegi', 'Bul jerdı zıyarat etiwdiń xalıq dástúri kóp ásirler dawamında saqlanǵan'],
    },
  },
  {
    id: 'qubla-ustyurt',
    name: { ru: 'Святилища Устюрта', en: 'Qubla Ustyurt Shrines', uz: 'Ustyurt ziyoratgohlari', qq: 'Ústirt zıyaratgahları' },
    category: 'mausoleums', coords: [42.80, 57.50], century: 'XII-XV в.',
    facts: {
      ru: ['Разбросаны по плато Устюрт и связаны с культурой кочевников средневековья', 'Некоторые святилища включают наусы — зороастрийские оссуарии для хранения костей', 'Сохранились уникальные каменные надгробия с руническими надписями'],
      en: ['Scattered across the Ustyurt Plateau and associated with medieval nomadic culture', 'Some shrines include nauses — Zoroastrian ossuaries for storing bones', 'Unique stone tombstones with runic inscriptions have survived'],
      uz: ['Ustyurt platosiga tarqalgan va o\'rta asrlar ko\'chmanchilar madaniyati bilan bog\'liq', 'Ba\'zi ziyoratgohlar suyaklarni saqlash uchun zardushtiylik ossuariylari — nauslarni o\'z ichiga oladi', 'Run yozuvlari bilan noyob tosh qabr toshlari saqlanib qolgan'],
      qq: ['Ústirt platosına tarqalǵan hám orta ásirler kóshpeliler mádeniyeti menen baylanıslı', 'Ayırım zıyaratgahlar sóyeklerdi saqlawǵa arnalǵan zardushtıylıq ossuuriyları — nawsları óz ishine aladı', 'Run jazıwları menen nádiri tas qabır tasları saqlanǵan'],
    },
  },

  // Nukus
  {
    id: 'ajiniyaz-monument',
    name: { ru: 'Памятник Ажиниязу', en: 'Ajiniyaz Monument', uz: 'Ajiniyoz haykalı', qq: 'Ajınıyaz heykelí' },
    category: 'nukus', coords: [42.46, 59.60], century: '1970-е',
    facts: {
      ru: ['Памятник великому каракалпакскому поэту XIX века, основоположнику современной каракалпакской литературы', 'Установлен в советский период как признание вклада Ажиниязa в каракалпакскую культуру', 'Ажиниязу приписывают создание лирики, передающей боль народа в эпоху колонизации'],
      en: ['Monument to the great 19th-century Karakalpak poet, founder of modern Karakalpak literature', 'Erected during the Soviet period as recognition of Ajiniyaz\'s contribution to Karakalpak culture', 'Ajiniyaz is credited with creating lyric poetry conveying the suffering of the people during the era of colonization'],
      uz: ['XIX asr buyuk qoraqalpoq shoiri, zamonaviy qoraqalpoq adabiyotining asoschisiga bag\'ishlangan yodgorlik', 'Sovet davrida Ajiniyozning qoraqalpoq madaniyatiga qo\'shgan hissasi tan olinib o\'rnatilgan', 'Ajiniyozga mustamlaka davrida xalqning iztiroblarini ifodalovchi lirika yaratgan deb hisoblanadi'],
      qq: ['XIX ásir úlken qaraqalpaq aqını, házirgi qaraqalpaq ádebiyatınıń tiykarshısına arnalǵan yádgorlik', 'Sovet dáwirinde Ajınıyazdıń qaraqalpaq mádeniyetine qosqan úlesi tan alınıp ornalıstırılǵan', 'Ajınıyazǵa mustemleke dáwirinde halıqtıń azabını ifodalawshı lirika jaratqan dep esaplanadı'],
    },
  },
  {
    id: 'berdakh-monument',
    name: { ru: 'Памятник Бердаху', en: 'Berdakh Monument', uz: 'Berdaq haykalı', qq: 'Berdaq heykelí' },
    category: 'nukus', coords: [42.46, 59.61], century: '1990-е',
    facts: {
      ru: ['Посвящён Бердаху — народному поэту и певцу-импровизатору, символу каракалпакского народа', 'Бердах создал более 20 000 строк поэзии, посвящённой истории и судьбе своего народа', 'Его имя носит главный музей страны и несколько учебных заведений'],
      en: ['Dedicated to Berdakh — the people\'s poet and improvising bard, symbol of the Karakalpak people', 'Berdakh created more than 20,000 lines of poetry dedicated to the history and fate of his people', 'The main museum of the country and several educational institutions bear his name'],
      uz: ['Qoraqalpoq xalqining ramzi, xalq shoiri va improvizator hofiz Berdaqqa bag\'ishlangan', 'Berdaq xalqining tarixi va taqdiri haqida 20 000 dan ortiq misra she\'r yaratgan', 'Mamlakatning asosiy muzeyi va bir qancha o\'quv yurtlari uning nomini olgan'],
      qq: ['Qaraqalpaq halqınıń ramzı, xalıq aqını hám improvizator jirawshı Berdaqqa arnalǵan', 'Berdaq óziniń halqı tariyxı hám taqdirine arnalǵan 20 000 den artıq qatardan ibarat aqınlıq jaratqan', 'Mamlekettiń tiykarǵı muzeyi hám bir qansha oqıw orınları onıń atın alǵan'],
    },
  },
  {
    id: 'savitsky-monument',
    name: { ru: 'Памятник Игорю Савицкому', en: 'Savitsky Monument', uz: 'Savitskiy haykalı', qq: 'Savitskiy heykelí' },
    category: 'nukus', coords: [42.47, 59.60], century: '2000-е',
    facts: {
      ru: ['Памятник человеку, создавшему один из самых необычных музеев мира в каракалпакской пустыне', 'Савицкий спас тысячи произведений искусства советского авангарда от уничтожения', 'Его музей называют «Лувром пустыни» — он хранит более 90 000 экспонатов'],
      en: ['Monument to the man who created one of the world\'s most unusual museums in the Karakalpak desert', 'Savitsky saved thousands of Soviet avant-garde artworks from destruction', 'His museum is called the "Louvre of the Desert" — it holds more than 90,000 exhibits'],
      uz: ['Qoraqalpoq cho\'lida dunyodagi eng g\'ayrioddiy muzeylardan birini yaratgan odamga bag\'ishlangan yodgorlik', 'Savitskiy sovet avangard san\'atining minglab asarlarini yo\'q bo\'lib ketishdan saqlab qoldi', 'Uning muzeyi «Cho\'l Luvri» deb ataladi — unda 90 000 dan ortiq eksponat mavjud'],
      qq: ['Qaraqalpaq shólinde dúnyanıń eń ásayıp muzeylerinen birin jaratqan adamǵa arnalǵan yádgorlik', 'Savitskiy sovet avangard óneriniń mıńlaǵan shıǵarmasın joq bolıwdan saqladı', 'Onıń muzeyi «Shól Luwri» dep ataladı — onda 90 000 den artıq eksponat bar'],
    },
  },
  {
    id: 'wwii-memorial',
    name: { ru: 'Мемориал Второй мировой войны', en: 'WWII Memorial', uz: 'Ikkinchi Jahon urushi memoriali', qq: 'Ekinshi Jáhán urısı memorialı' },
    category: 'nukus', coords: [42.46, 59.59], century: '1975',
    facts: {
      ru: ['Увековечивает память более 30 000 каракалпакцев, погибших в годы Второй мировой войны', 'Открыт в 1975 году к 30-летию Победы', 'Ежегодно 9 мая здесь собираются ветераны, их потомки и жители города для возложения цветов'],
      en: ['Commemorates more than 30,000 Karakalpaks who died during World War II', 'Opened in 1975 on the 30th anniversary of Victory', 'Every year on May 9, veterans, their descendants, and city residents gather here to lay flowers'],
      uz: ['Ikkinchi Jahon urushi yillarida halok bo\'lgan 30 000 dan ortiq qoraqalpoqlarning xotirasini abadiylashtiradi', '1975 yilda G\'alaba kunining 30 yilligida ochilgan', 'Har yili 9 mayda bu yerda gullar qo\'yish uchun faxriylar, ularning avlodlari va shahar aholisi to\'planadi'],
      qq: ['Ekinshi Jáhán urısı jıllarında qaza bolǵan 30 000 den artıq qaraqalpaqlar xatirasın mángiletedi', '1975 jılı Jeńis kúniniń 30 jıllıǵında ashılǵan', 'Jıl sayın 9 mayda bul jerde gúl qoyıw ushın veteranlar, olardan avlatlar hám qala halqı jiynalaadı'],
    },
  },
  {
    id: 'afghan-war-memorial',
    name: { ru: 'Памятник жертвам Афганской войны', en: 'Afghan War Memorial', uz: 'Afgʻon urushi qurbonlari haykalı', qq: 'Awǵan urısı qurbanları heykelí' },
    category: 'nukus', coords: [42.47, 59.61], century: '1990-е',
    facts: {
      ru: ['Посвящён солдатам из Каракалпакстана, погибшим в войне в Афганистане (1979–1989)', 'Открытие памятника совпало с годами независимости Узбекистана', 'Место ежегодного собрания ветеранов Афганской войны и их родственников'],
      en: ['Dedicated to soldiers from Karakalpakstan who died in the Afghan War (1979–1989)', 'The unveiling of the monument coincided with the years of Uzbekistan\'s independence', 'A place of annual gathering for Afghan War veterans and their relatives'],
      uz: ['Afgʻon urushida (1979–1989) halok bo\'lgan Qoraqalpog\'iston askarlari xotirasiga bag\'ishlangan', 'Yodgorlikning ochilishi O\'zbekiston mustaqilligining yillariga to\'g\'ri keldi', 'Afgʻon urushi faxriylari va ularning qarindoshlari yillik yig\'inining joyi'],
      qq: ['Awǵan urısında (1979–1989) qaza bolǵan Qaraqalpaqstan askerleri xatirasına arnalǵan', 'Yádgorliqdıń ashılıwı Ózbekstan gárezsizliginiń jıllarına tuǵrı keldi', 'Awǵan urısı veteranları hám olardan tuysqanlardıń jıllıq jiynalıw orını'],
    },
  },
  {
    id: 'independence-monument',
    name: { ru: 'Монумент независимости', en: 'Independence Monument', uz: 'Mustaqillik monumenti', qq: 'Gárezsizlik monumenti' },
    category: 'nukus', coords: [42.46, 59.62], century: '1991', featured: true,
    facts: {
      ru: ['Возведён в честь обретения Узбекистаном независимости в 1991 году', 'Является архитектурной доминантой центральной площади Нукуса', 'Символизирует стремление народа к свободе и самоопределению'],
      en: ['Erected in honor of Uzbekistan gaining independence in 1991', 'Is the architectural centerpiece of the central square of Nukus', 'Symbolizes the people\'s aspiration for freedom and self-determination'],
      uz: ['O\'zbekistonning 1991 yilda mustaqillikka erishganini nishonlash uchun qurilgan', 'Nukusning markaziy maydonining me\'moriy dominantasi hisoblanadi', 'Xalqning ozodlik va o\'z taqdirini o\'zi belgilashga intilishini ramziy ifodalaydi'],
      qq: ['Ózbekstannıń 1991 jılı gárezsizlikke erisiwin toylash ushın qurılǵan', 'Nókistiń oraylıq maydanınıń arxitekturalıq dominantası esaplanadı', 'Halıqtıń erkindik hám ózin-ózi anıqlawǵa intilisini ramzıy ifodalaydi'],
    },
  },
  {
    id: 'jirau-monument',
    name: { ru: 'Памятник каракалпакским джирау', en: 'Karakalpak Jirau Monument', uz: 'Jiraular haykalı', qq: 'Jirawlar heykelí' },
    category: 'nukus', coords: [42.45, 59.60], century: '2000-е',
    facts: {
      ru: ['Прославляет традицию джирау — эпических певцов-сказителей, хранителей каракалпакского фольклора', 'Джирау исполняли эпос «Сорок девушек» (Қырқ қыз) на дутаре и кобузе', 'Традиция джирау внесена в список нематериального культурного наследия ЮНЕСКО'],
      en: ['Celebrates the tradition of jirau — epic storyteller-singers, keepers of Karakalpak folklore', 'Jirau performed the epic "Forty Girls" (Qırq qız) on the dutar and kobyz', 'The jirau tradition is inscribed on UNESCO\'s Intangible Cultural Heritage list'],
      uz: ['Jirawlar an\'anasini ulug\'laydi — Qoraqalpoq folklorining saqlоvchilari bo\'lmish epik xonanda-qissaxonlar', 'Jirawlar dutor va qo\'biz cholg\'usida «Qirq qiz» eposini ijro etgan', 'Jirawlar an\'anasi YuNESKOning nomoddiy madaniy meros ro\'yxatiga kiritilgan'],
      qq: ['Jirawlar dástúrin ulıwmalandıradı — Qaraqalpaq folklorınıń saqshıları bolǵan epikalıq jirawshılar', 'Jirawlar dutar hám qobızda «Qırq qız» eposın atqarǵan', 'Jirawlar dástúri YuNESKONIŃ maddi emes mádeniyet mırasına kirgizilgen'],
    },
  },
  {
    id: 'alpamys-monument',
    name: { ru: 'Памятник Альпамысу', en: 'Alpamys Monument', uz: 'Alpomish haykalı', qq: 'Alpamıs heykelí' },
    category: 'nukus', coords: [42.47, 59.59], century: '2000-е',
    facts: {
      ru: ['Посвящён герою одноимённого эпоса — символу стойкости и богатырской силы тюркских народов', 'Эпос «Алпамыс» входит в список нематериального культурного наследия ЮНЕСКО', 'Монумент стал местом проведения фольклорных и культурных мероприятий'],
      en: ['Dedicated to the hero of the same-name epic — a symbol of resilience and heroic strength of Turkic peoples', 'The epic "Alpamys" is on the UNESCO Intangible Cultural Heritage list', 'The monument has become a venue for folklore and cultural events'],
      uz: ['Turkiy xalqlarning bardoshi va qahramonlik kuchining ramzi bo\'lmish bir nomli epos qahramoniga bag\'ishlangan', '«Alpomish» eposi YuNESKOning nomoddiy madaniy meros ro\'yxatiga kiritilgan', 'Monument folklor va madaniy tadbirlar o\'tkaziladigan joyga aylandi'],
      qq: ['Túrkiy halıqlardıń shıdamlılıq hám batırlıq kúshiniń ramzı bolǵan bir atlı epos qahramanına arnalǵan', '«Alpamıs» eposı YuNESKONIŃ maddi emes mádeniyet mırasına kirgizilgen', 'Monument folklor hám mádeniy is-sháralar ótkeziletın jerge aylandı'],
    },
  },
  {
    id: 'fishermen-monument',
    name: { ru: 'Памятник рыбакам Арала', en: 'Aral Fishermen Monument', uz: 'Orol baliqchilari haykalı', qq: 'Aral balıqshıları heykelí' },
    category: 'nukus', coords: [42.46, 59.58], century: '2010-е',
    facts: {
      ru: ['Посвящён рыбакам, которые потеряли работу и образ жизни из-за высыхания Аральского моря', 'Символизирует трагедию экологической катастрофы, затронувшей миллионы людей', 'Одно из немногих мест, где официально увековечены жертвы Аральской катастрофы'],
      en: ['Dedicated to fishermen who lost their livelihood due to the drying up of the Aral Sea', 'Symbolizes the tragedy of an ecological catastrophe that affected millions of people', 'One of the few places where the victims of the Aral catastrophe are officially commemorated'],
      uz: ['Orol dengizining qurib qolishi tufayli tirikchiligini yo\'qotgan baliiqchilarga bag\'ishlangan', 'Millionlab odamlarga ta\'sir ko\'rsatgan ekologik ofatning fojeasini ramziy ifodalaydi', 'Orol falokatining qurbonlari rasman abadiylashtirigan kamdan-kam joylardan biri'],
      qq: ['Aral teńiziniń quriw sebepinen tiri keshirmesin joǵaltqan balıqshılarǵa arnalǵan', 'Millionlaǵan adamlarǵa tásir etken ekologiyalıq apatınıń fajiasın ramzıy ifodalaydi', 'Aral apatınıń qurbanları rasmıy mángiletilgen az sanawlı jerlerden biri'],
    },
  },
  {
    id: 'amudarya-monument',
    name: { ru: 'Памятник Амударье', en: 'Amudarya Monument', uz: 'Amudaryo haykalı', qq: 'Ámiwdárya heykelí' },
    category: 'nukus', coords: [42.45, 59.62], century: '2000-е',
    facts: {
      ru: ['Прославляет великую реку, которая на протяжении тысячелетий была источником жизни для народов Хорезма', 'Амударья упоминается в древних текстах как легендарная река Окс', 'Символизирует тесную связь каракалпакского народа с водой и природой'],
      en: ['Celebrates the great river that for millennia has been a source of life for the peoples of Khorezm', 'The Amu Darya is mentioned in ancient texts as the legendary river Oxus', 'Symbolizes the close connection of the Karakalpak people with water and nature'],
      uz: ['Ming yillar davomida Xorazm xalqlari uchun hayot manbai bo\'lgan buyuk daryoni ulug\'laydi', 'Amudaryo qadimgi matnlarda afsonaviy Oks daryosi sifatida tilga olinadi', 'Qoraqalpoq xalqining suv va tabiat bilan yaqin aloqasini ramziy ifodalaydi'],
      qq: ['Mıń jıllar dawamında Xorezm halıqları ushın hayat deregi bolǵan ullı dáryanı ulıwmalandıradı', 'Ámiwdárya gadimgi tekstlerde afsanawiy Oks daryası retinde ataladı', 'Qaraqalpaq halqınıń suw hám tábiyat penen jaqın baylanısın ramzıy ifodalaydi'],
    },
  },

  // Museums
  {
    id: 'savitsky-museum',
    name: { ru: 'Музей Савицкого', en: 'Savitsky Museum', uz: 'Savitskiy muzeyi', qq: 'Savitskiy muzeyi' },
    category: 'museums', coords: [42.46, 59.60], century: '1966', featured: true, wonder: true,
    facts: {
      ru: ['Хранит крупнейшую в мире коллекцию советского авангарда — более 90 000 экспонатов', 'В годы СССР Савицкий тайно собирал запрещённые произведения, рискуя свободой', 'Журнал Time назвал его одним из самых необычных музеев мира'],
      en: ['Houses the world\'s largest collection of Soviet avant-garde — more than 90,000 exhibits', 'During the USSR era, Savitsky secretly collected banned works, risking his freedom', 'Time magazine named it one of the most unusual museums in the world'],
      uz: ['Dunyodagi eng yirik sovet avangard kolleksiyasini saqlaydi — 90 000 dan ortiq eksponat', 'Sovet yillarida Savitskiy erkinligini xavf ostiga qo\'yib, taqiqlangan asarlarni yashirincha to\'plagan', 'Time jurnali uni dunyodagi eng g\'ayrioddiy muzeylardan biri deb atagan'],
      qq: ['Dúnyadaǵı eń iri sovet avangard kórmeshatın saqlaydı — 90 000 den artıq eksponat', 'Sovet jıllarında Savitskiy erkinligin qáwip astına qoyıp, tıyılǵan shıǵarmalardı jashırın jiynastırǵan', 'Time jurnalı onı dúnyadaǵı eń ásayıp muzeylerden biri dep atadı'],
    },
  },
  {
    id: 'state-museum',
    name: { ru: 'Каракалпакский государственный музей', en: 'Karakalpakstan State Museum', uz: 'Qoraqalpogʻiston davlat muzeyi', qq: 'Qaraqalpaqstan mámleketlik muzeyi' },
    category: 'museums', coords: [42.46, 59.61], century: '1929', featured: true,
    facts: {
      ru: ['Основан в 1929 году как один из первых музеев Средней Азии советской эпохи', 'Хранит обширную коллекцию каракалпакского прикладного искусства — ювелирных украшений, ковров и юрт', 'Археологическая коллекция охватывает период от эпохи бронзы до средневековья'],
      en: ['Founded in 1929 as one of the first museums in Central Asia of the Soviet era', 'Houses an extensive collection of Karakalpak applied art — jewelry, carpets, and yurts', 'The archaeological collection spans from the Bronze Age to the medieval period'],
      uz: ['Sovet davri O\'rta Osiyosining birinchi muzeylaridan biri sifatida 1929 yilda tashkil etilgan', 'Qoraqalpoq amaliy san\'atining keng kolleksiyasini saqlaydi — zargarlik buyumlari, gilamlar va o\'tovlar', 'Arxeologik kolleksiya bronza davridan o\'rta asrgacha bo\'lgan davrni qamrab oladi'],
      qq: ['Sovet dáwiri Orta Aziyasınıń birinshi muzeylerinen biri retinde 1929 jılı shólkemlestirilgen', 'Qaraqalpaq qolóner óneriniń keń kórmesin saqlaydı — zergerlik buyımları, gileler hám otawlar', 'Arxeologiyalıq kórme bronza dáwirinen orta ásirge shekem bolǵan dáwirdi qamlap aladı'],
    },
  },
  {
    id: 'berdakh-museum',
    name: { ru: 'Музей Бердаха', en: 'Berdakh Museum', uz: 'Berdaq muzeyi', qq: 'Berdaq muzeyi' },
    category: 'museums', coords: [42.46, 59.59], century: '1990-е',
    facts: {
      ru: ['Посвящён жизни и творчеству великого каракалпакского поэта Бердаха (1827–1900)', 'Хранит рукописи, личные вещи поэта и иллюстрации к его произведениям', 'Проводит ежегодные мероприятия в день рождения поэта с участием современных джирау'],
      en: ['Dedicated to the life and work of the great Karakalpak poet Berdakh (1827–1900)', 'Preserves manuscripts, personal belongings of the poet, and illustrations to his works', 'Holds annual events on the poet\'s birthday with participation of modern jirau'],
      uz: ['Buyuk qoraqalpoq shoiri Berdaq (1827–1900) hayoti va ijodiga bag\'ishlangan', 'Qo\'lyozmalar, shoirning shaxsiy buyumlari va asarlariga rasmlar saqlanadi', 'Zamonaviy jirawlarning ishtirokida shoirning tug\'ilgan kuni munosabati bilan yillik tadbirlar o\'tkaziladi'],
      qq: ['Ullı qaraqalpaq aqını Berdaq (1827–1900) ómiri hám dóretiwshiligine arnalǵan', 'Qol jazbaları, aqınnıń shaxsıy buyımları hám shıǵarmalarına suwretler saqlanadı', 'Házirgi jirawlardıń qatnasıwında aqınnıń tuwılǵan kúni munosebeti menen jıllıq is-sháralar ótkeriledi'],
    },
  },
  {
    id: 'ethnographic-museum',
    name: { ru: 'Этнографический музей', en: 'Ethnographic Museum', uz: 'Etnografik muzey', qq: 'Etnografiyalıq muzey' },
    category: 'museums', coords: [42.46, 59.58], century: '2000-е',
    facts: {
      ru: ['Представляет традиционный быт каракалпаков: юрту, национальную одежду, посуду и орудия труда', 'Особое место занимает коллекция каракалпакских женских украшений — одна из богатейших в регионе', 'Регулярно проводит мастер-классы по традиционным ремёслам для туристов и школьников'],
      en: ['Represents traditional Karakalpak lifestyle: yurt, national clothing, utensils, and work tools', 'A special place is held by the collection of Karakalpak women\'s jewelry — one of the richest in the region', 'Regularly holds master classes in traditional crafts for tourists and schoolchildren'],
      uz: ['Qoraqalpoqlarning an\'anaviy turmush tarzini taqdim etadi: o\'tov, milliy kiyim, idish-tovoq va mehnat qurollari', 'Qoraqalpoq ayollar zargarligining kolleksiyasi — mintaqadagi eng boylardan biri — alohida o\'rin egallaydi', 'Turistlar va o\'quvchilar uchun an\'anaviy hunarmandchilik bo\'yicha muntazam master-klasslar o\'tkaziladi'],
      qq: ['Qaraqalpaqlar dástúriy turmıs tarzın usınadı: otaw, milliy kiyim, gap-gashan hám miynet quralları', 'Qaraqalpaq áyeller zergerliginiń kórmesi — aymaqtaǵı eń baylarınan biri — arnawlı orin egellaydi', 'Turistler hám oqıwshılar ushın dástúriy hunarmentshilik boyınsha dúzip-dúzip master-klasslar ótkeriledi'],
    },
  },
  {
    id: 'ellikkala-museum',
    name: { ru: 'Археологический музей Элликкалы', en: 'Ellikkala Archaeological Museum', uz: 'Ellikqalʼa arxeologik muzeyi', qq: 'Ellikqala arxeologiyalıq muzeyi' },
    category: 'museums', coords: [41.73, 60.62], century: '1990-е',
    facts: {
      ru: ['Расположен в районе, название которого означает «Пятьдесят крепостей»', 'Хранит артефакты, найденные в ходе раскопок многочисленных крепостей Элликкалинского района', 'Является отправной точкой для экскурсий к ближайшим крепостям Хорезма'],
      en: ['Located in a district whose name means "Fifty Fortresses"', 'Preserves artifacts found during excavations of numerous fortresses of the Ellikkala district', 'Serves as a starting point for excursions to the nearest fortresses of Khorezm'],
      uz: ['Nomi "Ellik qalʼa" degan ma\'noni anglatadigan tumanida joylashgan', 'Ellikqalʼa tumanining ko\'plab qalʼalaridagi qazishmalar jarayonida topilgan artefaktlarni saqlaydi', 'Xorazmning yaqin atrofdagi qalʼalariga ekskursiyalar uchun boshlang\'ich nuqta bo\'lib xizmat qiladi'],
      qq: ['Atı "Ellik qala" degen mánisti bildiretın rayonda ornalasqan', 'Ellikqala rayonınıń kóp sanawlı qalalarındaǵı qazıwlar dawamında tabılǵan artefaktlardı saqlaydı', 'Xorezmniń jaqın atraptaǵı qalalarına ekskursiyalar ushın baslanǵısh noqtası retinde xızmet etedi'],
    },
  },

  // Khorezm fortresses
  {
    id: 'kalalygyr',
    name: { ru: 'Калалыгыр', en: 'Kalalygyr', uz: 'Kalalıgʻir', qq: 'Kalalıǵır' },
    category: 'khorezm', coords: [42.10, 59.50], century: 'V веке до нашей эры',
    facts: {
      ru: ['Одна из крупнейших крепостей древнего Хорезма площадью более 20 гектаров', 'Обнаружены остатки дворца с богато украшенными залами и настенными росписями', 'По мнению учёных, могла служить резиденцией хорезмийских правителей раннего периода'],
      en: ['One of the largest fortresses of ancient Khorezm with an area of more than 20 hectares', 'Remains of a palace with richly decorated halls and wall paintings were found', 'According to scholars, it could have served as a residence of early Khorezm rulers'],
      uz: ['Maydoni 20 gektardan ortiq bo\'lgan qadimgi Xorazmning eng yirik qalʼalaridan biri', 'Boy bezatilgan zallar va devor rasmlari bo\'lgan saroy qoldiqlari aniqlangan', 'Olimlar fikricha, erta davr Xorazm hukmdorlarining qarorgohi bo\'lishi mumkin edi'],
      qq: ['Maydanı 20 gektardan artıq bolǵan gadimgi Xorezmniń eń iri qalalarınan biri', 'Bay bezlengen zallar hám diywarlıq suwretler bar saray qaldıqları aniqlandi', 'Alımlar pikirine kóre, erte dáwir Xorezm húkimdarları rezidentsiyası bolǵan bolıwı múmkin'],
    },
  },
  {
    id: 'kavat-kala-kh',
    name: { ru: 'Кават-Кала', en: 'Kavat-Kala', uz: 'Kavat-Qalʼa', qq: 'Kavat-Qala' },
    category: 'khorezm', coords: [41.95, 60.73], century: 'XII в.',
    facts: {
      ru: ['Средневековая крепость, охранявшая важный ирригационный канал Хорезма', 'Сохранились остатки ворот с подъёмным мостом — редкость для крепостей региона', 'Упоминается в средневековых арабских источниках как важный опорный пункт'],
      en: ['A medieval fortress that guarded an important irrigation canal of Khorezm', 'Remains of a gate with a drawbridge have survived — rare for fortresses of the region', 'Mentioned in medieval Arabic sources as an important stronghold'],
      uz: ['Xorazmning muhim sug\'orish kanalini himoya qilgan o\'rta asrlar qalʼasi', 'Ko\'tarib tushuriladigan ko\'prikli darvozaning qoldiqlari saqlanib qolgan — mintaqaning qalʼalari uchun kamdan-kam uchraydi', "O'rta asrlar arab manbalarida muhim tayanch nuqtasi sifatida tilga olinadi"],
      qq: ['Xorezmniń áhmiyetli suwlandırıw kanalın qorǵaǵan orta ásir qalası', 'Kóteriletın kópirli dárwazdıń qaldıqları saqlanǵan — aymaq qalaları ushın siyrek ushırasadı', 'Orta ásir arab dereklerinde áhmiyetli taylaw noqtası retinde ataladı'],
    },
  },
  {
    id: 'tok-kala',
    name: { ru: 'Ток-Кала', en: 'Tok-Kala', uz: 'Toq-Qalʼa', qq: 'Toq-Qala' },
    category: 'khorezm', coords: [42.50, 59.55], century: 'I веке нашей эры',
    facts: {
      ru: ['Расположена на территории нынешнего Таxтакупырского района Каракалпакстана', 'Раскопки выявили следы богатого ремесленного квартала с мастерскими гончаров и кузнецов', 'Найденные монеты позволили точно датировать основные периоды жизни крепости'],
      en: ['Located in the territory of the present-day Takhtakupyr district of Karakalpakstan', 'Excavations revealed traces of a wealthy craft quarter with workshops of potters and blacksmiths', 'Coins found allowed the main periods of the fortress\'s occupation to be precisely dated'],
      uz: ['Hozirgi Qoraqalpog\'iston Taxtako\'pir tumanining hududida joylashgan', 'Qazishmalar kulolchilar va temirchilar ustaxonalari bilan boy hunarmandchilik kvartalining izlarini aniqladi', 'Topilgan tangalar qalʼaning asosiy davrlarini aniq belgilash imkonini berdi'],
      qq: ['Házirgi Qaraqalpaqstan Taxtakópir rayonınıń hududında ornalasqan', 'Qazıwlar kulalsher hám temirshiler ustaxanaları menen bay hunarmentshilik kvartalınıń izlerin anıqladı', 'Tabılǵan tıyınlar qalaniń tiykarǵı dáwirlerın anıq belgilew imkaniyatın berdi'],
    },
  },
  {
    id: 'qumboskan-kala',
    name: { ru: 'Кумбоскан-Кала', en: 'Qumboskan-Kala', uz: 'Qumbasqan-Qalʼa', qq: 'Qumbosqan-Qala' },
    category: 'khorezm', coords: [41.80, 60.50], century: 'IV веке до нашей эры',
    facts: {
      ru: ['Одна из наименее изученных крепостей хорезмийской системы', 'Расположена на песчаных дюнах, что существенно усложняет проведение раскопок', 'Сохранились оборонительные валы высотой до 3–4 метров по всему периметру'],
      en: ['One of the least studied fortresses of the Khorezm system', 'Located on sand dunes, which significantly complicates excavation work', 'Defensive ramparts up to 3–4 meters high have been preserved along the entire perimeter'],
      uz: ['Xorazm tizimining eng kam o\'rganilgan qalʼalaridan biri', 'Qumli tepaliklarda joylashgan, bu qazishmalarni sezilarli darajada qiyinlashtiradi', 'Butun perimetr bo\'ylab 3–4 metrgacha balandlikdagi mudofaa to\'g\'onlari saqlanib qolgan'],
      qq: ['Xorezm sistemasınıń eń az úyrenilgen qalalarınan biri', 'Qum dóbelerde ornalasqan, bul qazıwlardı sezilarli dárejede qıyınlastıradı', 'Pútkil perimetr boyında 3–4 metrge shekem biyiklikteǵi qorǵaw valları saqlanǵan'],
    },
  },

  // Nature
  {
    id: 'ustyurt-plateau',
    name: { ru: 'Плато Устюрт', en: 'Ustyurt Plateau', uz: 'Ustyurt platosi', qq: 'Ústirt platosı' },
    category: 'nature', coords: [42.50, 57.00], century: '', featured: true,
    facts: {
      ru: ['Огромное плато площадью более 200 000 кв. км, разделяющее Каспийское и Аральское моря', 'На плато сохранились загадочные геоглифы в виде стрел и треугольников, видимые только с воздуха', 'Один из последних нетронутых ландшафтов Центральной Азии, где обитают архары, джейраны и волки'],
      en: ['A vast plateau of more than 200,000 sq km, separating the Caspian and Aral seas', 'Mysterious geoglyphs in the shape of arrows and triangles, visible only from the air, have survived on the plateau', 'One of the last untouched landscapes of Central Asia, home to argali, gazelles and wolves'],
      uz: ['Kaspiy va Orol dengizlarini ajratib turadigan 200 000 kv.km dan ortiq maydonli ulkan plato', 'Platoda faqat havоdan ko\'rinadigan o\'q va uchburchaklar shaklida sirli geogliflar saqlanib qolgan', 'Arhar, jayron va bo\'rilar yashaydigan Markaziy Osiyoning so\'nggi tegmagan landshaftlaridan biri'],
      qq: ['Kaspiy hám Aral teńizlerin ajıratıp turatın 200 000 kv.km den artıq maydalı ullı plato', 'Platoda tek hawadan kórinetın oq hám úshbúrısh formalarındaǵı sırlı geoglifler saqlanǵan', 'Arxar, jayran hám qasqırlar jasaytın Orta Aziyaniń aqırǵı tegilmegen landshaftlarınan biri'],
    },
  },
  {
    id: 'aral-sea',
    name: { ru: 'Аральское море', en: 'Aral Sea', uz: 'Orol dengizi', qq: 'Aral teńizi' },
    category: 'nature', coords: [44.00, 58.50], century: '', featured: true,
    facts: {
      ru: ['В 1960-е годы было четвёртым по величине озером в мире — сегодня потеряло более 90% своего объёма', 'Экологическая катастрофа стала одной из крупнейших, вызванных деятельностью человека, в истории', 'Сегодня предпринимаются международные усилия по частичному восстановлению северной части моря'],
      en: ['In the 1960s it was the fourth largest lake in the world — today it has lost more than 90% of its volume', 'The ecological catastrophe became one of the largest man-made disasters in history', 'Today international efforts are being made to partially restore the northern part of the sea'],
      uz: ['1960-yillarda dunyodagi to\'rtinchi eng katta ko\'l edi — bugungi kunda hajmining 90% dan ortig\'ini yo\'qotdi', 'Ekologik ofat tarixdagi eng yirik inson faoliyati natijasida yuzaga kelgan ofatlardan biriga aylandi', 'Bugungi kunda dengizning shimoliy qismini qisman tiklash bo\'yicha xalqaro harakatlar amalga oshirilmoqda'],
      qq: ['1960-jıllarda dúnyadaǵı tórtinshi eń iri kól edi — búgin kólemi 90% den artıǵın joǵalttı', 'Ekologiyalıq apat tariyxtaǵı eń iri adam iskerligi nátiyjesinde júz bergen apatlardan birine aylandı', 'Búgin teńizdiń tústik bólimin qısman tiklew boyınsha xalıqaralıq háreketler ámelge asırılmaqta'],
    },
  },
  {
    id: 'muynak-ships',
    name: { ru: 'Кладбище кораблей в Муйнаке', en: 'Ship Graveyard of Muynak', uz: 'Moʻynoq kemalari', qq: 'Moyınaq kemeleri' },
    category: 'nature', coords: [43.77, 58.68], century: '', featured: true,
    facts: {
      ru: ['Ржавеющие корабли стоят посреди пустыни там, где 50 лет назад плескалось море', 'Стало одним из самых узнаваемых символов экологической катастрофы Аральского моря', 'Привлекает тысячи туристов и фотографов со всего мира как место памяти и предупреждения'],
      en: ['Rusting ships stand in the middle of the desert where the sea lapped 50 years ago', 'Has become one of the most recognizable symbols of the Aral Sea ecological catastrophe', 'Attracts thousands of tourists and photographers from around the world as a site of memory and warning'],
      uz: ['Zanglab borayotgan kemalar 50 yil oldin dengiz to\'lqinlangan cho\'l o\'rtasida turibdi', 'Orol dengizining ekologik falokatining eng taniqli ramzlaridan biriga aylandi', 'Xotira va ogohlantiruv joyi sifatida butun dunyodan minglab turist va fotosuratchilarni jalb qiladi'],
      qq: ['Tatlanıp atırǵan kemeler 50 jıl aldında teńiz tolqınlanǵan shól ortasında turıbdı', 'Aral teńiziniń ekologiyalıq apatınıń eń tanıqlı ramzlarınan birine aylandı', 'Xatıra hám eskertiw orını retinde dúnyanıń hár tárepinen mıńlaǵan turistler hám fotosuratshılardı tartadı'],
    },
  },
  {
    id: 'amudarya-delta',
    name: { ru: 'Дельта Амударьи', en: 'Amudarya Delta', uz: 'Amudaryo deltasi', qq: 'Ámiwdárya deltası' },
    category: 'nature', coords: [43.00, 58.90], century: '',
    facts: {
      ru: ['Одна из крупнейших речных дельт Центральной Азии, включающая тысячи каналов и озёр', 'Является важным птичьим угодьем — здесь гнездятся и зимуют десятки видов редких птиц', 'Площадь дельты резко сократилась из-за уменьшения стока Амударьи в результате орошения полей'],
      en: ['One of the largest river deltas in Central Asia, including thousands of canals and lakes', 'Is an important bird habitat — dozens of rare bird species nest and winter here', 'The delta area has sharply decreased due to reduced flow of the Amu Darya as a result of field irrigation'],
      uz: ['Minglab kanal va ko\'llarni o\'z ichiga olgan Markaziy Osiyodagi eng yirik daryo deltalaridan biri', 'Muhim qushlar makoni hisoblanadi — bu yerda o\'nlab noyob qush turlari in quradi va qishlaydi', 'Delta maydoni dala sug\'orish natijasida Amudaryo oqimining kamayishi tufayli keskin qisqargan'],
      qq: ['Mıńlaǵan kanal hám kóllerdi óz ishine alǵan Orta Aziyaniń eń iri dárya deltalarınan biri', 'Áhmiyetli qus jaylawı esaplanadı — bul jerde onyaqtaǵan siyrek qus túrleri uya salıp qıslaydı', 'Delta maydanı dala suwlandırıw nátiyjesinde Ámiwdárya aǵımınıń kemeyiwi sebepli keskin qısqardı'],
    },
  },
  {
    id: 'sudochye-lake',
    name: { ru: 'Озеро Судочье', en: 'Sudochye Lake', uz: 'Sudochʼye koʻli', qq: 'Sudoshye kóli' },
    category: 'nature', coords: [43.50, 57.80], century: '',
    facts: {
      ru: ['Один из немногих крупных водоёмов, сохранившихся в дельте Амударьи', 'Является природным заповедником и домом для редкого пеликана и многих видов водоплавающих птиц', 'Участвует в международной программе восстановления экосистем Приаралья'],
      en: ['One of the few large bodies of water preserved in the Amu Darya delta', 'Is a nature reserve and home to the rare pelican and many species of waterfowl', 'Participates in an international program for the restoration of Aral Sea ecosystems'],
      uz: ['Amudaryo deltasida saqlanib qolgan kamdan-kam yirik suv havzalaridan biri', 'Tabiat qo\'riqxonasi bo\'lib, noyob pelikan va ko\'plab suv qushlari turlariga makondur', 'Orolbo\'yi ekotizimlarini tiklash xalqaro dasturida ishtirok etadi'],
      qq: ['Ámiwdárya deltasında saqlanǵan az sanawlı iri suw kóllerinen biri', 'Tábiyat qaraǵandısı bolıp, siyrek pelikan hám kóp sanawlı suw qusları túrlerine meken bolıp tabıladı', 'Aral boyı ekosistemaların tiklew xalıqaralıq baǵdarlamasında qatnasadı'],
    },
  },

  // Settlements
  {
    id: 'khodjeyli',
    name: { ru: 'Ходжейли', en: 'Khodjeyli', uz: 'Xoʻjayli', qq: 'Xojaylı' },
    category: 'settlements', coords: [42.55, 59.45], century: 'X в.',
    facts: {
      ru: ['Один из старейших городов Каракалпакстана с тысячелетней историей', 'В средневековье был важным центром на торговом пути из Хорезма в Казахские степи', 'Современный город хранит остатки средневековых кварталов и мечетей'],
      en: ['One of the oldest cities of Karakalpakstan with a thousand-year history', 'In the Middle Ages was an important center on the trade route from Khorezm to the Kazakh steppes', 'The modern city preserves remains of medieval quarters and mosques'],
      uz: ['Ming yillik tarixga ega Qoraqalpog\'istonning eng qadimiy shaharlaridan biri', 'O\'rta asrlarda Xorazmdan Qozog\'iston dashtlariga boradigan savdo yo\'lida muhim markaz bo\'lgan', 'Zamonaviy shahar o\'rta asrlar kvartallar va masjidlarning qoldiqlarini saqlaydi'],
      qq: ['Mıń jıllıq tariyxqa iye Qaraqalpaqstannıń eń gadimgi qalalarınan biri', 'Orta ásirlerinde Xorezmnen Qazaq dalaları baratuǵın sawda jolında áhmiyetli oray bolǵan', 'Házirgi qala orta ásirler kvartalları hám meshitleriniń qaldıqların saqlaydı'],
    },
  },
  {
    id: 'muynak',
    name: { ru: 'Муйнак', en: 'Muynak', uz: 'Moʻynoq', qq: 'Moyınaq' },
    category: 'settlements', coords: [43.77, 58.69], century: 'XIX в.',
    facts: {
      ru: ['Когда-то процветающий рыбацкий порт на берегу Аральского моря, теперь город в пустыне', 'В советские годы здесь находился крупнейший рыбоконсервный завод СССР', 'Сегодня стал символом экологической катастрофы и привлекает туристов со всего мира'],
      en: ['Once a thriving fishing port on the shores of the Aral Sea, now a town in the desert', 'During the Soviet years, the largest fish-canning factory in the USSR was located here', 'Today it has become a symbol of ecological catastrophe and attracts tourists from around the world'],
      uz: ['Bir zamonlar Orol dengizi qirg\'og\'idagi gullab-yashnagan baliqchilik porti, endi cho\'ldagi shahar', 'Sovet yillarida bu yerda SSSRning eng yirik baliq konservalari zavodi joylashgan edi', 'Bugungi kunda ekologik falokatning ramziga aylangan va butun dunyodan turistlarni jalb qiladi'],
      qq: ['Bir waqıtlar Aral teńizi jağasındaǵı gúllep ósken balıqshılıq portı, endi shóldegi qala', 'Sovet jıllarında bul jerde SSRJdiń eń iri balıq konserva zavodı jaylasqan edi', 'Búgin ekologiyalıq apatınıń ramzına aylandı hám dúnyanıń hár tárepinen turistlerdi tartadı'],
    },
  },
  {
    id: 'turtkul',
    name: { ru: 'Турткуль', en: 'Turtkul', uz: 'Turtkoʻl', qq: 'Tórtkel' },
    category: 'settlements', coords: [41.55, 61.00], century: 'XVI в.',
    facts: {
      ru: ['Бывшая столица Каракалпакской АССР до 1932 года — тогда она называлась Петро-Александровск', 'Расположен на берегу Амударьи, что всегда определяло его торговое и стратегическое значение', 'Рядом находятся хорошо сохранившиеся руины средневекового города'],
      en: ['Former capital of the Karakalpak ASSR until 1932 — then called Petro-Alexandrovsk', 'Located on the banks of the Amu Darya, which has always determined its trade and strategic importance', 'Well-preserved ruins of a medieval city are located nearby'],
      uz: ['1932 yilgacha Qoraqalpoq ASSRning sobiq poytaxti — o\'sha paytda Petro-Aleksandrovsk deb atalgan', 'Amudaryo qirg\'og\'ida joylashgan, bu uning savdo va strategik ahamiyatini doim belgilab kelgan', 'Yaqin atrofda o\'rta asrlar shahrining yaxshi saqlanib qolgan xarobalari bor'],
      qq: ['1932 jılǵa shekem Qaraqalpaq ASSRdiń sobıq paytaxtı — ol waqıtta Petro-Aleksandrovsk dep atalǵan', 'Ámiwdárya jağasında ornalasqan, bul onıń sawda hám strategiyalıq áhmiyetin dáyim belgilep kelgen', 'Jaqın atraptа orta ásirler qalasınıń jaqsı saqlanǵan xarabaları bar'],
    },
  },
  {
    id: 'beruni',
    name: { ru: 'Беруни', en: 'Beruni', uz: 'Beruniy', qq: 'Beruniy' },
    category: 'settlements', coords: [41.69, 60.75], century: 'X в.',
    facts: {
      ru: ['Назван в честь великого учёного Аль-Бируни, уроженца древнего Хорезма', 'Аль-Бируни был одним из величайших учёных-энциклопедистов Средневековья', 'Рядом с городом расположены несколько значимых крепостей хорезмийской системы'],
      en: ['Named after the great scholar Al-Biruni, a native of ancient Khorezm', 'Al-Biruni was one of the greatest encyclopedic scholars of the Middle Ages', 'Several significant fortresses of the Khorezm system are located near the city'],
      uz: ['Qadimgi Xorazm yerligi bo\'lgan buyuk olim Al-Beruniy sharafiga nomlangan', 'Al-Beruniy o\'rta asrlarning eng buyuk ensiklopedik olimlridan biri bo\'lgan', 'Shahar yaqinida Xorazm tizimining bir necha muhim qalʼalari joylashgan'],
      qq: ['Gadimgi Xorezm jerlikli ullı alım Al-Beruniy sharafına ataǵan', 'Al-Beruniy orta ásirlerdiń eń ullı entsiklopediyashı alımlarınan biri bolǵan', 'Qala jaqınında Xorezm sistemasınıń bir neshe áhmiyetli qalaları ornalasqan'],
    },
  },
  {
    id: 'chimbay',
    name: { ru: 'Чимбай', en: 'Chimbay', uz: 'Chimboy', qq: 'Shımbay' },
    category: 'settlements', coords: [42.93, 59.77], century: 'XVIII в.',
    facts: {
      ru: ['Один из старейших городов северного Каракалпакстана, известный как культурный центр', 'В XIX веке был важным базаром и центром каракалпакского ремесленничества', 'Родина нескольких известных каракалпакских поэтов и народных мастеров'],
      en: ['One of the oldest cities of northern Karakalpakstan, known as a cultural center', 'In the 19th century was an important bazaar and center of Karakalpak craftsmanship', 'Birthplace of several famous Karakalpak poets and folk masters'],
      uz: ['Madaniy markaz sifatida tanilgan shimoliy Qoraqalpog\'istonning eng qadimiy shaharlaridan biri', 'XIX asrda muhim bozor va qoraqalpoq hunarmandchiligining markazi bo\'lgan', 'Bir necha taniqli qoraqalpoq shoirlari va xalq ustalari vatani'],
      qq: ['Mádeniyet orayı retinde tanılǵan tústik Qaraqalpaqstannıń eń gadimgi qalalarınan biri', 'XIX ásirde áhmiyetli bazar hám qaraqalpaq hunarmentshiliginiń orayı bolǵan', 'Bir neshe belgili qaraqalpaq aqınları hám xalıq ustalarınıń watanı'],
    },
  },

  // Modern
  {
    id: 'constitution-monument',
    name: { ru: 'Монумент Конституции', en: 'Constitution Monument', uz: 'Konstitutsiya monumenti', qq: 'Konstitutsiya monumenti' },
    category: 'modern', coords: [42.46, 59.62], century: '2000-е',
    facts: {
      ru: ['Посвящён принятию Конституции Республики Узбекистан 8 декабря 1992 года', 'Олицетворяет верховенство закона и гражданские права каракалпакского народа', 'Расположен в центре Нукуса и является точкой притяжения для горожан и туристов'],
      en: ['Dedicated to the adoption of the Constitution of the Republic of Uzbekistan on December 8, 1992', 'Embodies the rule of law and civil rights of the Karakalpak people', 'Located in the center of Nukus and is a gathering point for residents and tourists'],
      uz: ['1992 yil 8 dekabrda O\'zbekiston Respublikasi Konstitutsiyasining qabul qilinishiga bag\'ishlangan', 'Qonun ustuvorligi va qoraqalpoq xalqining fuqarolik huquqlarini timsollaydi', 'Nukus markazida joylashgan va shahar aholisi va turistlar uchun tortishish nuqtasi hisoblanadi'],
      qq: ['1992 jıl 8 dekabrde Ózbekstan Respublikası Konstitutsiyasınıń qabıl etilgenine arnalǵan', 'Nizam ústinligi hám qaraqalpaq halqınıń puqaralıq huqıqların bildiredi', 'Nókis orayında ornalasqan hám qala halqı hám turistler ushın tartılıs noqtası esaplanadı'],
    },
  },
  {
    id: 'friendship-monument',
    name: { ru: 'Монумент Дружбы народов', en: 'Friendship of Nations Monument', uz: 'Xalqlar doʻstligi monumenti', qq: 'Xalıqlar dostlıǵı monumenti' },
    category: 'modern', coords: [42.47, 59.61], century: '2000-е',
    facts: {
      ru: ['Символизирует единство многонационального народа Узбекистана', 'Отражает историческое сосуществование каракалпаков, узбеков, казахов и других народов региона', 'Место проведения городских праздников и культурных мероприятий'],
      en: ['Symbolizes the unity of the multinational people of Uzbekistan', 'Reflects the historical coexistence of Karakalpaks, Uzbeks, Kazakhs, and other peoples of the region', 'Venue for city holidays and cultural events'],
      uz: ['O\'zbekiston ko\'p millatli xalqining birligini ramziy ifodalaydi', 'Mintaqadagi qoraqalpoqlar, o\'zbeklar, qozog\'lar va boshqa xalqlarning tarixiy hamjashatligini aks ettiradi', 'Shahar bayramlari va madaniy tadbirlar o\'tkazish joyi'],
      qq: ['Ózbekstan kóp milliy halqınıń birligin ramzıy ifodalaydi', 'Aymaqdaǵı qaraqalpaqlar, ózbekler, qazaqlar hám basqa halıqlardıń tariyxıy birge jasawın sáwlelendiredi', 'Qala bayramları hám mádeniyet is-sháralar ótkeriletın jer'],
    },
  },
  {
    id: 'teachers-monument',
    name: { ru: 'Памятник учителям', en: 'Teachers Monument', uz: 'Oʻqituvchilar haykalı', qq: 'Ustazlar heykelí' },
    category: 'modern', coords: [42.46, 59.60], century: '2010-е',
    facts: {
      ru: ['Посвящён вкладу учителей в развитие образования и культуры Каракалпакстана', 'Установлен в знак уважения к педагогическому труду как основе прогресса общества', 'Расположен вблизи одного из главных образовательных учреждений Нукуса'],
      en: ['Dedicated to the contribution of teachers to the development of education and culture of Karakalpakstan', 'Erected as a sign of respect for teaching as the foundation of social progress', 'Located near one of the main educational institutions of Nukus'],
      uz: ['O\'qituvchilarning Qoraqalpog\'istonda ta\'lim va madaniyatni rivojlantirishga qo\'shgan hissasiga bag\'ishlangan', 'Jamiyat taraqqiyotining asosi sifatida pedagogik mehnatni hurmat belgisi sifatida o\'rnatilgan', 'Nukusning asosiy ta\'lim muassasalaridan biri yaqinida joylashgan'],
      qq: ['Ustazlardıń Qaraqalpaqstanda bilim beriw hám mádeniyet rawajlandırıwǵa qosqan úlesine arnalǵan', 'Jámiyetlik progresstiń tiykarı retinde pedagogikalıq miynetke húrmet belgisi sıpatında ornalıstırılǵan', 'Nókistiń tiykarǵı bilim beriw mákemelerinen biri jaqınında ornalasqan'],
    },
  },
  {
    id: 'aral-ecology-monument',
    name: { ru: 'Памятник экологической катастрофе Арала', en: 'Aral Ecological Catastrophe Monument', uz: 'Orol ekologik falokatı haykalı', qq: 'Aral ekologiyalıq apatı heykelí' },
    category: 'modern', coords: [43.78, 58.70], century: '2010-е',
    facts: {
      ru: ['Напоминает о глобальной экологической трагедии, унёсшей источник жизни целого народа', 'Призывает мировое сообщество к ответственному отношению к природным ресурсам', 'Место паломничества экологов и учёных, изучающих последствия Аральской катастрофы'],
      en: ['Reminds of the global ecological tragedy that took away the source of life of an entire people', 'Calls on the world community to a responsible attitude toward natural resources', 'A pilgrimage site for ecologists and scientists studying the consequences of the Aral catastrophe'],
      uz: ['Butun xalqning hayot manbayini olib ketgan global ekologik fojia haqida eslatadi', 'Jahon hamjamiyatini tabiiy resurslarga mas\'uliyatli munosabatga chaqiradi', 'Orol falokatining oqibatlarini o\'rganadigan ekologlar va olimlar ziyoratgohi'],
      qq: ['Pútkil halıqtıń hayat derеgin alıp ketken global ekologiyalıq fajia haqqında eslatadı', 'Dúnyanıń jámáátshiligini tábiyiy resurslarga jawaplı qatnasqa shaqıradı', 'Aral apatınıń aqıbetlerin úyrenetuǵın ekologlar hám alımlar zıyaratgahı'],
    },
  },

  // Other
  {
    id: 'caravan-route',
    name: { ru: 'Древний караванный путь Хорезма', en: 'Ancient Caravan Route of Khorezm', uz: 'Xorazm karvon yoʻli', qq: 'Xorezm karvan jolı' },
    category: 'other', coords: [41.80, 60.50], century: 'II-I тысячелетии до нашей эры',
    facts: {
      ru: ['Часть Великого Шёлкового пути, связывавшего Китай, Среднюю Азию и Средиземноморье', 'Вдоль пути обнаружены древние постоялые дворы — рибаты — с колодцами и складами', 'По этому пути проходили не только товары, но и распространялись религии, языки и технологии'],
      en: ['Part of the Great Silk Road connecting China, Central Asia, and the Mediterranean', 'Ancient inns — ribats — with wells and warehouses were found along the route', 'Not only goods traveled this route, but also religions, languages, and technologies spread along it'],
      uz: ['Xitoy, O\'rta Osiyo va O\'rta er dengizini bog\'lagan Buyuk Ipak yo\'lining bir qismi', 'Yo\'l bo\'ylab quduqlar va omborxonalar bilan qadimiy karvonsaroylar — ribotlar aniqlangan', 'Bu yo\'ldan nafaqat tovarlar, balki dinlar, tillar va texnologiyalar ham tarqalgan'],
      qq: ['Qıtay, Orta Aziya hám Orta teńizdi baylaǵan Ullı Jibek jolınıń bir bólegi', 'Jol boyında qudıqlar hám ambarlar menen gadimgi karvansaraylar — ribatlar tabılǵan', 'Bul joldan tek tovarlar emes, dinler, tiller hám texnologiyalar da tarqalǵan'],
    },
  },
  {
    id: 'zoroastrian-temples',
    name: { ru: 'Руины храмов зороастрийцев', en: 'Zoroastrian Temple Ruins', uz: 'Zardushtiylar ibodatxonasi xarobalari', qq: 'Zardushtıylar ibadatxanası xarabalari' },
    category: 'other', coords: [41.85, 60.70], century: 'VI-V веке до нашей эры',
    facts: {
      ru: ['Свидетельствуют о том, что зороастризм был государственной религией Хорезма более тысячи лет', 'В руинах найдены оссуарии — глиняные сосуды для хранения костей умерших по зороастрийскому обряду', 'Некоторые храмы продолжали использоваться даже после прихода ислама'],
      en: ['Testify that Zoroastrianism was the state religion of Khorezm for more than a thousand years', 'Ossuaries — clay vessels for storing bones of the dead according to Zoroastrian rites — were found in the ruins', 'Some temples continued to be used even after the arrival of Islam'],
      uz: ['Zardushtiylik mingdan ortiq yil davomida Xorazmning davlat dini bo\'lganligidan dalolat beradi', 'Xarobalarda zardushtiylik marosimiga ko\'ra o\'liklarning suyaklarini saqlash uchun loy idishlar — ossuuriylar topilgan', 'Ba\'zi ibodatxonalar islom kelganidan keyin ham ishlatilishda davom etgan'],
      qq: ['Zardushtıylıq Xorezmde mıńnan artıq jıl dawamında mámleketlik din bolǵannan dalálat beredi', 'Xarabalarda zardushtıylıq ritualı boyınsha ólilerdiń sóyeklerin saqlawǵa arnalǵan gúl ıdıslar — ossuuriylar tabılǵan', 'Ayırım ibadatxanalar islam kelgennen keyin de paydalanılıwda dawam etken'],
    },
  },
  {
    id: 'ellikkala-walls',
    name: { ru: 'Оборонительные стены Элликкалы', en: 'Ellikkala Defensive Walls', uz: 'Ellikqalʼa mudofaa devorlari', qq: 'Ellikqala qorǵaw diywalları' },
    category: 'other', coords: [41.73, 60.63], century: 'IV веке до нашей эры',
    facts: {
      ru: ['Остатки масштабной оборонительной системы, защищавшей плодородные земли Хорезма', 'Протяжённость некоторых участков стен превышает несколько километров', 'Свидетельствуют о высоком уровне военно-инженерного искусства древних хорезмийцев'],
      en: ['Remains of a large-scale defensive system that protected the fertile lands of Khorezm', 'The length of some sections of walls exceeds several kilometers', 'Testify to the high level of military engineering art of the ancient Khorezm people'],
      uz: ['Xorazmning unumdor yerlarini himoya qilgan keng ko\'lamli mudofaa tizimining qoldiqlari', 'Devorlarning ba\'zi qismlari bir necha kilometrdan oshadi', 'Qadimgi xorazmiylarning yuqori darajadagi harbiy muhandislik san\'atidan dalolat beradi'],
      qq: ['Xorezmniń ónimdar jerlerın qorǵaǵan keń kólemli qorǵanıs sistemasınıń qaldıqları', 'Diywarlardıń ayırım bólimleri bir neshe kilometrden artıq', 'Gadimgi xorezmiylerdiń joqarı dárejedegi harbiy injenerlik ónerinen dalálat beredi'],
    },
  },
];

export const wonders = [
  'ayaz-kala', 'toprak-kala', 'koi-krylgan-kala', 'chilpyk', 'sultan-uvays', 'mazlumkhan-sulu', 'savitsky-museum'
];

export const newsArticles = [
  {
    id: 'n1',
    title: { ru: 'Новые находки в Аяз-Кале', en: 'New Finds at Ayaz-Kala', uz: 'Ayoz-Qalʼadan yangi topilmalar', qq: 'Ayaz-Qaladaǵı jaŋa tabılmalar' },
    excerpt: { ru: 'Археологи обнаружили древние артефакты, датируемые III веком до нашей эры.', en: 'Archaeologists discovered ancient artifacts dating back to the 3rd century BC.', uz: 'Arxeologlar mil. avv. III asrga tegishli qadimiy artefaktlarni topishdi.', qq: 'Arxeologlar b.e.sh. III ásirge tiyisli gadimgi artefaktlardı taptı.' },
    date: '2026-04-15', category: 'archaeology', featured: true,
  },
  {
    id: 'n2',
    title: { ru: 'Музей Савицкого принял 100 000 посетителей', en: 'Savitsky Museum Reaches 100,000 Visitors', uz: 'Savitskiy muzeyi 100 000 tashrif buyuruvchiga yetdi', qq: 'Savitskiy muzeyi 100 000 kóriwshige jetisti' },
    excerpt: { ru: 'Рекордное число туристов посетило один из самых необычных музеев мира.', en: 'A record number of tourists visited one of the most unique museums in the world.', uz: 'Dunyodagi eng noyob muzeylardan birini rekord miqdordagi turistlar tashrif buyurdi.', qq: 'Dúnyadaǵı eń ájaıyp muzeylerdiń birin rekord sanındaǵı turistler keldi.' },
    date: '2026-03-28', category: 'culture', featured: true,
  },
  {
    id: 'n3',
    title: { ru: 'Реставрация крепости Топрак-Кала', en: 'Restoration of Toprak-Kala Fortress', uz: 'Toprak-Qalʼa qaytadan tiklanmoqda', qq: 'Topıraq-Qala qayta tiklenbekte' },
    excerpt: { ru: 'Международная команда начала масштабную реставрацию в одной из крупнейших крепостей древнего Хорезма.', en: 'An international team has begun a large-scale restoration of one of the largest fortresses of ancient Khorezm.', uz: 'Xalqaro jamoa qadimiy Xorazmdagi eng yirik qalʼalardan birini keng koʻlamda tiklashni boshladi.', qq: 'Xalıqaralıq komanda gadimgi Xorezmdegi eń iri qalalardan birin keŋ kólemde tiklawdı basladi.' },
    date: '2026-03-10', category: 'archaeology', featured: false,
  },
  {
    id: 'n4',
    title: { ru: 'Фестиваль каракалпакской культуры', en: 'Karakalpak Culture Festival', uz: 'Qoraqalpoq madaniyati festivali', qq: 'Qaraqalpaq mádeniyet festivalí' },
    excerpt: { ru: 'В Нукусе прошел ежегодный фестиваль, посвященный культурному наследию региона.', en: 'Nukus hosted an annual festival dedicated to the cultural heritage of the region.', uz: 'Nukusda mintaqa madaniy merosiga bagʻishlangan yillik festival boʻlib oʻtdi.', qq: 'Nókiste aymaq mádeniyet mırasına arnalǵan jıllıq festival bolıp ótti.' },
    date: '2026-02-20', category: 'culture', featured: false,
  },
  {
    id: 'n5',
    title: { ru: 'Новый туристический маршрут по Каракалпакстану', en: 'New Tourist Route Across Karakalpakstan', uz: 'Qoraqalpogʻiston boʻylab yangi turistik marshrut', qq: 'Qaraqalpaqstan boyınsha jaŋa turistlik marshrut' },
    excerpt: { ru: 'Разработан уникальный маршрут, охватывающий 15 ключевых памятников региона.', en: 'A unique route covering 15 key monuments of the region has been developed.', uz: 'Mintaqadagi 15 ta asosiy yodgorlikni qamrab olgan noyob marshrut ishlab chiqildi.', qq: 'Aymaqdaǵı 15 tiykarǵı yadgorliktı qamlap alǵan ayırıqsha marshrut islep shıǵıldı.' },
    date: '2026-01-15', category: 'tourism', featured: true,
  },
];