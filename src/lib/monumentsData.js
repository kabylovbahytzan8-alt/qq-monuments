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
  {
    id: 'dev-kala',
    name: { ru: 'Дев-Кала', en: 'Dev-Kala', uz: 'Dev-Qalʼa', qq: 'Dev-Qala' },
    category: 'fortresses', coords: [41.72, 60.58], century: 'III-II веке до нашей эры',
    facts: {
      ru: ['Название переводится как «крепость дьявола» или «крепость великана» — согласно местным преданиям, её возвели сверхъестественные существа', 'Массивные стены из сырцового кирпича достигают толщины 5–6 метров у основания', 'Вблизи крепости обнаружены следы древних ирригационных каналов и жилых кварталов'],
      en: ['The name translates as "devil\'s fortress" or "giant\'s fortress" — according to local legends, it was built by supernatural beings', 'The massive adobe brick walls reach 5–6 meters thick at the base', 'Near the fortress, traces of ancient irrigation canals and residential quarters were found'],
      uz: ['Nomi «shayton qalʼasi» yoki «dev qalʼasi» deb tarjima qilinadi — mahalliy afsonalarga ko\'ra, uni g\'ayritabiiy mavjudodlar qurgan', 'Xom g\'ishtdan qurilgan massiv devorlar asosida 5–6 metr qalinlikka yetadi', 'Qalʼa yaqinida qadimiy sug\'orish kanallari va turar-joy kvartallarining izlari topilgan'],
      qq: ['Atı «shaytannıń qalası» yaki «devdiń qalası» dep awdarıladı — jergilikli afsanalar boyınsha, onı g\'ayritábiyiy jánliler qurǵan', 'Shiy kerpiishten qurılǵan massiv diywalar tiykarında 5–6 metr qalıńlıqqa jetedi', 'Qala jaqınında gadimgi suwlandırıw kanalları hám turarjay kvartallarınıń izleri tabılǵan'],
    },
  },
  {
    id: 'beketata',
    name: {
      ru: 'Бекет-Ата',
      en: 'Beket-Ata',
      uz: 'Beket-ota',
      qq: 'Beket-Ata'
    },
    // FIX: was 'mazars' — category does not exist. Corrected to 'mausoleums'
    category: 'mausoleums',
    coords: [44.35, 52.08],
    century: 'XVIII век',
    facts: {
      ru: [
        'Подземная мечеть и святыня, высеченная в скале',
        'Бекет-Ата считается одним из самых почитаемых суфийских святых Центральной Азии',
        'Паломники приезжают сюда со всего региона для молитвы и духовного очищения'
      ],
      en: [
        'An underground mosque and shrine carved into the rock',
        'Beket-Ata is considered one of the most revered Sufi saints of Central Asia',
        'Pilgrims come here from across the region for prayer and spiritual purification'
      ],
      uz: [
        'Qoyaga o\'yib qurilgan yer osti masjidi va ziyoratgoh',
        'Beket-ota Markaziy Osiyodagi eng ulug\' sufiya avliyolaridan biri hisoblanadi',
        'Bu yerga ziyoratchilar ibodat va ruhiy poklanish uchun kelishadi'
      ],
      qq: [
        'Qaya ishine oyılǵan jer astı meshiti hám qásiyetli orın',
        'Beket-Ata Orta Aziyadaǵı eń qádirli sufiy áwliyalarınıń biri esaplanadı',
        'Bul jerge zıyaratshılar dúǵa hám ruwxıy tazalanıw ushın keledi'
      ],
    },
  },
  {
    id: 'berkut-kala',
    name: { ru: 'Беркут-Кала', en: 'Berkut-Kala', uz: 'Berkut-Qalʼa', qq: 'Berkut-Qala' },
    category: 'fortresses', coords: [41.88, 60.65], century: 'VI-VIII в.',
    facts: {
      ru: ['Одна из хорошо сохранившихся крепостей раннесредневекового Хорезма', 'Прямоугольная в плане с мощными башнями по углам и вдоль стен', 'Внутри обнаружены остатки жилых домов и хозяйственных построек'],
      en: ['One of the well-preserved fortresses of early medieval Khorezm', 'Rectangular in plan with powerful towers at corners and along walls', 'Remains of residential houses and outbuildings were found inside'],
      uz: ['Erta o\'rta asrlar Xorazmining yaxshi saqlanib qolgan qalʼalaridan biri', 'Burchaklar va devorlar bo\'ylab kuchli minoralari bilan rejada to\'g\'ri burchakli', 'Ichida turar-joy uylari va xo\'jalik binolarining qoldiqlari topilgan'],
      qq: ['Erte orta ásirler Xorezminiń jaqsı saqlanǵan qalalarınan biri', 'Búrıshlar hám diywalar boyında qúwatlı minaʼları menen jobada tórtbúrısh', 'Ishinde turarjay úyler hám xojalıq qurılıslarınıń qaldıqları tabılǵan'],
    },
  },
  {
    id: 'teshik-kala',
    name: { ru: 'Тешик-Кала', en: 'Teshik-Kala', uz: 'Teshik-Qalʼa', qq: 'Teshik-Qala' },
    category: 'fortresses', coords: [41.96, 60.60], century: 'V-VIII в.',
    facts: {
      ru: ['Название означает «дырявая крепость» — стены пронизаны многочисленными бойницами', 'Уникальная система вентиляции внутри стен свидетельствует о высоком строительном мастерстве', 'Раскопки выявили следы длительного непрерывного обитания'],
      en: ['The name means "holey fortress" — the walls are pierced with numerous loopholes', 'A unique ventilation system inside the walls testifies to high construction skill', 'Excavations revealed traces of prolonged continuous habitation'],
      uz: ['Nomi "teshik qalʼa" degan ma\'noni anglatadi — devorlar ko\'plab tuynuklar bilan teshilgan', 'Devorlar ichidagi noyob ventilyatsiya tizimi yuqori qurilish mahoratidan dalolat beradi', 'Qazishmalar uzoq muddatli uzluksiz yashashning izlarini aniqladi'],
      qq: ['Atı "teshik qala" degen mánisti bildirredi — diywalar kóp sanawlı shaqshalar menen teskilgen', 'Diywalar ishindegi nádiri jeldetiv sisteması joqarı qurılıs mahalından dalálat beredi', 'Qazıwlar uzaq múddetli úzliksiz mekenlestiriwdiń izlerin anıqladı'],
    },
  },
  {
    id: 'kuyk-kala',
    name: { ru: 'Куюк-Кала', en: 'Kuyk-Kala', uz: 'Kuyuk-Qalʼa', qq: 'Kuyuk-Qala' },
    category: 'fortresses', coords: [41.91, 60.71], century: 'IV-III в. до н.э.',
    facts: {
      ru: ['Небольшая прямоугольная крепость с хорошо читаемыми оборонительными рвами', 'Расположена в центре древней ирригационной системы', 'Находки керамики указывают на связи с греко-бактрийской культурой'],
      en: ['A small rectangular fortress with well-defined defensive moats', 'Located in the center of an ancient irrigation system', 'Pottery finds indicate connections with Greco-Bactrian culture'],
      uz: ['Yaxshi o\'qiladigan mudofaa xandaqlari bilan kichik to\'g\'ri burchakli qalʼa', 'Qadimiy sug\'orish tizimining markazida joylashgan', 'Kulolchilik topilmalari greko-baktriya madaniyati bilan aloqalarni ko\'rsatadi'],
      qq: ['Jaqsı kórinetın qorǵaw orlı kishi tórtbúrısh qala', 'Gadimgi suwlandırıw sistemasınıń orayında ornalasqan', 'Kulalshlıq tabılmaları greko-baktriya mádeniyeti menen baylanısların kórsetedi'],
    },
  },
  {
    id: 'aydar-kala',
    name: { ru: 'Айдар-Кала', en: 'Aydar-Kala', uz: 'Aydar-Qalʼa', qq: 'Aydar-Qala' },
    category: 'fortresses', coords: [41.83, 60.62], century: 'II-I в. до н.э.',
    facts: {
      ru: ['Укреплённое поселение на краю древнего орошаемого оазиса', 'Стены сохранились на высоту до 4 метров в ряде мест', 'Обнаружены следы пожара — вероятно, следствие военного разрушения'],
      en: ['A fortified settlement at the edge of an ancient irrigated oasis', 'Walls have been preserved up to 4 meters high in several places', 'Traces of fire were found — likely a result of military destruction'],
      uz: ['Qadimiy sug\'oriladigan vohaning chekkasidagi mustahkamlangan aholi punkti', 'Devorlar ba\'zi joylarda 4 metrgacha balandlikda saqlanib qolgan', 'Yong\'in izlari aniqlangan — ehtimol, harbiy vayronagarchilik natijasi'],
      qq: ['Gadimgi suwlandırılǵan wayxanıń shettindegi bekkemlengen mekenlestiriw', 'Diywalar ayırım jerlerinde 4 metrge shekem biyiklikte saqlanǵan', 'Ot izleri tabılǵan — múmkin, harbiy buzılıstıń nátiyjesı'],
    },
  },
  {
    id: 'jigerb-kala',
    name: { ru: 'Джигербент', en: 'Jigerb-Kala', uz: 'Jigarbend', qq: 'Jigerben' },
    category: 'fortresses', coords: [41.74, 60.67], century: 'I-III в.',
    facts: {
      ru: ['Название буквально означает «печень» — возможно, связано с формой холма, на котором стоит крепость', 'Служила ключевым узлом обороны южного направления хорезмийской системы', 'Обнаружены следы нескольких этапов строительства и перестройки'],
      en: ['The name literally means "liver" — possibly linked to the shape of the hill on which the fortress stands', 'Served as a key defensive node of the southern direction of the Khorezm system', 'Traces of several stages of construction and reconstruction were found'],
      uz: ['Nomi so\'zma-so\'z "jigar" degan ma\'noni anglatadi — ehtimol, qalʼa turgan tepalik shakli bilan bog\'liq', 'Xorazm tizimining janubiy yo\'nalishida asosiy mudofaa tuguni bo\'lib xizmat qilgan', 'Bir necha bosqichli qurilish va qayta qurilish izlari aniqlangan'],
      qq: ['Atı sózbe-sóz "jigar" degen mánisti bildirredi — múmkin, qala turǵan tóbe shaklı menen baylanıslı', 'Xorezm sistemasınıń tústik bagdarında tiykarǵı qorǵanıs túyni wazıypasın atqarǵan', 'Bir neshe basqıshlı qurılıs hám qayta qurılıs izleri tabılǵan'],
    },
  },
  {
    id: 'kunya-urgench',
    name: {
      ru: 'Куня-Ургенч',
      en: 'Kunya-Urgench',
      uz: 'Koʻhna Urganch',
      qq: 'Kóhne Úrgenish'
    },
    // FIX: was 'historical_city' — category does not exist. Corrected to 'settlements'
    category: 'settlements',
    coords: [42.32, 59.15],
    century: 'XI–XVI вв.',
    facts: {
      ru: [
        'Древняя столица Хорезма и один из важнейших центров Великого шёлкового пути',
        'Здесь сохранились мавзолеи, минарет Кутлуг-Тимура и другие памятники средневековой архитектуры',
        'Включён в список Всемирного наследия ЮНЕСКО'
      ],
      en: [
        'Ancient capital of Khorezm and one of the key centers of the Silk Road',
        'Home to mausoleums, the Kutlug-Timur minaret, and other medieval monuments',
        'Listed as a UNESCO World Heritage Site'
      ],
      uz: [
        'Qadimgi Xorazm poytaxti va Buyuk Ipak yo\'lining muhim markazlaridan biri',
        'Bu yerda maqbaralar, Qutlug\' Temur minorasi va boshqa o\'rta asr yodgorliklari saqlangan',
        'YUNESKO Jahon merosi ro\'yxatiga kiritilgan'
      ],
      qq: [
        'Qadimgı Xorezm poytaxtı hám Ulıwma Ipek jolınıń eń áhmiyetli ortalıqlarınıń biri',
        'Bul jerde maqbaralar, Qutlıg Temur minarası hám basqa orta ásir estelikleri saqlanǵan',
        'YUNESKO dúnyalıq miyrası dizimine kirgizilgen'
      ]
    },
  },
  {
    id: 'uzunkyr-kala',
    name: { ru: 'Узункыр', en: 'Uzunkyr', uz: 'Uzunqir', qq: 'Uzınqır' },
    category: 'fortresses', coords: [41.77, 60.64], century: 'IV в. до н.э.',
    facts: {
      ru: ['Название означает «длинный обрыв» — крепость расположена на вытянутом плато', 'Одна из крупнейших по протяжённости стен — периметр превышает 2 км', 'Предположительно являлась административным центром округа'],
      en: ['The name means "long cliff" — the fortress is located on an elongated plateau', 'One of the largest in terms of wall length — the perimeter exceeds 2 km', 'Presumably served as the administrative center of the district'],
      uz: ['Nomi "uzun qirq" degan ma\'noni anglatadi — qalʼa cho\'zilgan platoda joylashgan', 'Devorlar uzunligi bo\'yicha eng yiriklaridan biri — perimetr 2 km dan oshadi', 'Ehtimol, okrugning ma\'muriy markazi bo\'lgan'],
      qq: ['Atı "uzın jar" degen mánisti bildirredi — qala sozılǵan platoda ornalasqan', 'Diywalar uzınlıǵı boyınsha eń irilérinen biri — perimetr 2 km den artıq', 'Taxmınan okrugniń ádministratsiya orayı bolǵan'],
    },
  },
  {
    id: 'dzhanpyk-kala',
    name: {
      ru: 'Джанпык-кала',
      en: 'Dzhanpyk-Kala',
      uz: 'Jampiq-Qalʼa',
      qq: 'Jánpıq-Qala'
    },
    category: 'fortresses',
    coords: [41.90, 60.95],
    century: 'IV–III вв. до н.э.',
    facts: {
      ru: [
        'Древняя крепость эпохи Хорезма, расположенная в пустынной зоне',
        'Использовалась как оборонительный и сторожевой пункт',
        'Сохранились остатки стен и башен из сырцового кирпича'
      ],
      en: [
        'An ancient Khorezm fortress located in a desert area',
        'Used as a defensive and watch post',
        'Remains of mudbrick walls and towers are preserved'
      ],
      uz: [
        'Qadimgi Xorazm davriga oid cho\'l hududidagi qalʼa',
        'Mudofaa va kuzatuv punkti sifatida ishlatilgan',
        'Xom g\'ishtdan qurilgan devor va minoralar qoldiqlari saqlangan'
      ],
      qq: [
        'Qadimgı Xorezm dáwirine tiyisli shól aymaǵındaǵı qala',
        'Qorǵanıw hám baqılaw punkti retinde paydalanılǵan',
        'Shik g\'ishtten qurılǵan divar hám minaralar qaldıqları saqlanǵan'
      ]
    },
  },
  {
    id: 'ellik-kala',
    name: {
      ru: 'Эллик-кала',
      en: 'Ellik-Kala',
      uz: 'Ellikqalʼa',
      qq: 'Ellikqala'
    },
    category: 'fortresses',
    coords: [41.90, 60.60],
    century: 'IV–III вв. до н.э.',
    facts: {
      ru: [
        'Регион, название которого переводится как "Пятьдесят крепостей"',
        'Здесь расположено множество древних укреплений хорезмийской цивилизации',
        'Один из крупнейших археологических комплексов Каракалпакстана'
      ],
      en: [
        'The region whose name means "Fifty Fortresses"',
        'It contains numerous ancient fortifications of the Khorezm civilization',
        'One of the largest archaeological complexes in Karakalpakstan'
      ],
      uz: [
        'Nomi "Ellik qalʼa" — "Ellikta qalʼa" degan maʼnoni anglatadi',
        'Bu hududda Xorazm sivilizatsiyasining ko\'plab qadimiy qalʼalari joylashgan',
        'Qoraqalpog\'istonning eng yirik arxeologik majmualaridan biri'
      ],
      qq: [
        'Ataması "Ellik qala" — "eliw qala" degan maʼnini bildiredi',
        'Bul aymaqta Xorezm sivilizatsiyasınıń kóptegen qadimgı qalaları bar',
        'Qaraqalpaqstannıń eń iri arxeologiyalıq kompleksleriniń biri'
      ]
    },
  },
  {
    id: 'kyrk-kyz-kala',
    name: {
      ru: 'Кырк-Кыз-Кала',
      en: 'Kyrk-Kyz-Kala',
      uz: 'Qirq Qiz Qalʼa',
      qq: 'Qırq Qız-Qala'
    },
    category: 'fortresses',
    coords: [41.95, 60.70],
    century: 'IV–IX вв.',
    facts: {
      ru: [
        'Название переводится как «Крепость сорока девушек»',
        'Одно из самых загадочных укреплений Хорезма с мощными стенами из сырцового кирпича',
        'Существует множество легенд о женском гарнизоне, защищавшем крепость'
      ],
      en: [
        'The name means "Fortress of Forty Girls"',
        'One of the most mysterious Khorezm fortresses with strong mudbrick walls',
        'There are many legends about a female garrison defending the fortress'
      ],
      uz: [
        'Nomi "Qirq qiz qalʼa" — "Qirq qizlar qalʼasi" degan maʼnoni anglatadi',
        'Xorazmning eng sirli qalʼalaridan biri bo\'lib, xom g\'ishtdan qurilgan mustahkam devorlarga ega',
        'Qalʼani himoya qilgan ayol jangchilar haqida ko\'plab rivoyatlar mavjud'
      ],
      qq: [
        'Ataması "Qırq qız qala" — "Qırq qızlar qalası" degendi bildiradi',
        'Xorezmniń eń sirlı qalalarından biri, shiy kerpiştan qurılǵan berik diywallarǵa iye',
        'Qalǵanı qorǵaǵan áyel áskerler haqqında kóp legenalar bar'
      ]
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
  {
    id: 'mirab-arab',
    name: { ru: 'Мавзолей Мираб-Араб', en: 'Mirab-Arab Mausoleum', uz: 'Mirab-Arab maqbarasi', qq: 'Mirab-Arab maqbarası' },
    category: 'mausoleums', coords: [42.28, 59.35], century: 'XVI в.',
    facts: {
      ru: ['Изящный купольный мавзолей, посвящённый известному религиозному деятелю — распространителю ислама в Хорезме', 'Построен в традициях хорезмской архитектуры с характерным декором из обожжённого кирпича и полихромных изразцов', 'До сих пор является действующим местом поклонения и религиозного почитания для жителей окрестных сёл'],
      en: ['An elegant domed mausoleum dedicated to a prominent religious figure — a spreader of Islam in Khorezm', 'Built in the traditions of Khorezm architecture with characteristic decor of fired brick and polychrome tiles', 'Still an active place of worship and religious veneration for residents of surrounding villages'],
      uz: ['Xorazmda islomni yoygan taniqli din arbobiga bag\'ishlangan nafis gumbazli maqbara', 'Pishirilgan g\'isht va ko\'p rangli koshinlar bilan xarakterli bezak bilan Xorazm me\'morchilik an\'analarida qurilgan', 'Hozir ham atrofdagi qishloq aholisi uchun faol ibodat va diniy ulug\'lash joyi'],
      qq: ['Xorezmde islamdı tarqatqan belgili din arbabına arnalǵan kelisimli gümbezli maqbara', 'Pısırılǵan kerpish hám kóp túsli koshinler menen xarakterli bezeniw menen Xorezm me\'marshılıq dástúrlerinde qurılǵan', 'Háliy de atraptaǵı awıl halqı ushın ámeliy ibadat hám diniy ulıwlandırıw orını'],
    },
  },
  {
    id: 'karaman-ata',
    name: { ru: 'Мавзолей Караман-Ата', en: 'Karaman Ata Mausoleum', uz: 'Karamon Ota maqbarasi', qq: 'Qaraman Ata maqbarası' },
    category: 'mausoleums', coords: [42.60, 57.90], century: 'XIV-XV в.',
    facts: {
      ru: ['Расположен в труднодоступных районах плато Устюрт — одно из наиболее удалённых святых мест', 'По преданию, является местом упокоения суфийского святого — покровителя пастухов и кочевников', 'Ежегодно привлекает паломников, совершающих длительный путь по плато'],
      en: ['Located in hard-to-reach areas of the Ustyurt Plateau — one of the most remote holy sites', 'According to legend, it is the resting place of a Sufi saint — patron of shepherds and nomads', 'Annually attracts pilgrims making a long journey across the plateau'],
      uz: ['Ustyurt plato qiyinchilik bilan boradigan hududlarida joylashgan — eng uzoq muqaddas joylardan biri', 'Rivoyatga ko\'ra, cho\'ponlar va ko\'chmanchilarning homiysi — so\'fiy avliyoning dafn joyi', 'Har yili plato bo\'ylab uzoq yo\'l bosib keladigan ziyoratchilarni jalb qiladi'],
      qq: ['Ústirt platosınıń qıyın barilatuǵın hudutlarında ornalasqan — eń alıs muqaddes orınlarınan biri', 'Rivayatqa kóre, shоpanlar hám kóshpelilerdiń qamqorhısı — sufiy ázizdiń dapn orını', 'Jıl sayın platо boyınsha uzaq jol júretuǵın zıyaratshılardı tartadı'],
    },
  },
  {
    id: 'juma-ata',
    name: { ru: 'Мавзолей Джума-Ата', en: 'Juma Ata Mausoleum', uz: 'Juma Ota maqbarasi', qq: 'Juma Ata maqbarası' },
    category: 'mausoleums', coords: [42.40, 59.20], century: 'XIII-XIV в.',
    facts: {
      ru: ['Посвящён местночтимому святому, имя которого связано с пятничной молитвой — Джумой', 'Архитектура мавзолея типична для каракалпакских средневековых погребальных сооружений', 'Место традиционного собрания верующих по пятницам в период религиозных праздников'],
      en: ['Dedicated to a locally revered saint whose name is associated with Friday prayer — Juma', 'The architecture is typical of Karakalpak medieval funerary structures', 'A place of traditional gathering of believers on Fridays during religious holidays'],
      uz: ['Nomi juma namozi bilan bog\'liq mahalliy avliyoga bag\'ishlangan', 'Me\'morchilik Qoraqalpoq o\'rta asrlar dafn inshootlari uchun xarakterlidir', 'Diniy bayramlar davrida jumalar kuni mo\'minlarning an\'anaviy yig\'in joyi'],
      qq: ['Atı juma namazı menen baylanıslı jergilikli ázizge arnalǵan', 'Arxitektura Qaraqalpaq orta ásirler dapn inshawları ushın xarakterli', 'Diniy bayramlar dáwirinde jumada iseniwshilerdiń dástúriy jiynalıw orını'],
    },
  },
  {
    id: 'kalifa-radzhab',
    name: {
      ru: 'Мавзолей Халифа Раджаб',
      en: 'Khalifa Rajab Mausoleum',
      uz: 'Xalifa Rajab maqbarasi',
      qq: 'Xalifa Rajab maqbarası'
    },
    category: 'mausoleums',
    coords: [42.44, 59.62],
    century: 'XII век',
    facts: {
      ru: [
        'Средневековый мавзолей, расположенный в некрополе Миздахкан',
        'Датируется примерно XII веком и относится к раннему исламскому периоду региона',
        'Сохранились только руины квадратного здания из сырцового кирпича'
      ],
      en: [
        'A medieval mausoleum located in the Mizdakhan necropolis',
        'Dates back to approximately the 12th century and belongs to the early Islamic period',
        'Only ruins of a square mudbrick structure have survived'
      ],
      uz: [
        'Mizdaxkan nekropolida joylashgan o\'rta asr maqbarasi',
        'Taxminan XII asrga tegishli va erta islom davriga kiradi',
        'Faqat xom g\'ishtdan qurilgan kvadrat inshoot qoldiqlari saqlangan'
      ],
      qq: [
        'Mizdaxkan nekropolında ornalasqan orta ásir maqbarası',
        'Taxmınan XII ásirge tiyisli hám erte islam dáwirine kiredi',
        'Tek shiy kerpiştan qurılǵan kvadrat imarat qaldıqları saqlanǵan'
      ]
    },
  },
  // FIX: Removed duplicate 'shamun-nabi' (first entry, coords [42.45, 59.60], century 'X в.').
  // Keeping the more detailed second entry below with id 'shamun-nabi'.
  {
    id: 'shamun-nabi',
    name: {
      ru: 'Мавзолей Шамун-Наби',
      en: 'Shamun-Nabi Mausoleum',
      uz: 'Shamun-Nabi maqbarasi',
      qq: 'Shamun-Nabi maqbarası'
    },
    category: 'mausoleums',
    coords: [42.44, 59.62],
    century: 'XVII–XVIII вв.',
    facts: {
      ru: [
        'Один из самых почитаемых мавзолеев Каракалпакстана, расположенный в некрополе Миздахкан',
        'Связан с легендарной фигурой Шамун-Наби, почитаемой как святой',
        'Известен своей длинной формой и характерной много-купольной архитектурой — длина усыпальницы достигает около 18 метров'
      ],
      en: [
        'One of the most revered mausoleums in Karakalpakstan, located in the Mizdakhan necropolis',
        'Associated with the legendary figure Shamun-Nabi, venerated as a saint',
        'Known for its elongated structure and distinctive multi-dome architecture — the tomb reaches about 18 meters in length'
      ],
      uz: [
        'Qoraqalpog\'istondagi eng hurmatli maqbaralardan biri, Mizdaxkan nekropolida joylashgan',
        'Avliyo sifatida e\'zozlanadigan Shamun-Nabi afsonaviy shaxsi bilan bog\'liq',
        'Uzun shakli va ko\'p gumbazli me\'morchiligi bilan mashhur — maqbaraning uzunligi taxminan 18 metrga yetadi'
      ],
      qq: [
        'Qaraqalpaqstanda eń húrmetli maqbaralardan biri, Mizdaxkan nekropolında ornalasqan',
        'Avliya retinde qadirlenetin Shamun-Nabi ańızalı shaxsı menen baylanıslı',
        'Uzın forması hám kóp gúmbezli me\'morchiligi menen belgili — maqbaranıń uzınlıǵı taxmınan 18 metrge jetedi'
      ]
    },
  },
  // FIX: Removed duplicate 'keshirmes-baba' (first entry, coords [42.30, 59.40], century 'XV в.').
  // Keeping the more detailed second entry below with id 'keshirmes-baba'.
  {
    id: 'keshirmes-baba',
    name: {
      ru: 'Мавзолей Кеширмес Баба',
      en: 'Keshirmes Baba Mausoleum',
      uz: 'Keshirmas bobo maqbarasi',
      qq: 'Keshirmes Baba maqbarası'
    },
    category: 'mausoleums',
    coords: [42.47, 59.61],
    century: 'XIV–XV вв.',
    facts: {
      ru: [
        'Один из почитаемых суфийских мавзолеев Каракалпакстана',
        'Название «Кеширмес» связывают с легендами о справедливом святом, который не прощал ложь и предательство',
        'Мавзолей расположен рядом с древними поселениями и остатками старых караванных путей'
      ],
      en: [
        'One of the revered Sufi mausoleums of Karakalpakstan',
        'The name "Keshirmes" is linked to legends about a righteous saint who never forgave lies and betrayal',
        'The mausoleum is located near ancient settlements and remnants of old caravan routes'
      ],
      uz: [
        'Qoraqalpog\'istondagi e\'zozlanadigan so\'fiy maqbaralaridan biri',
        '"Keshirmas" nomi yolg\'on va xiyonatni kechirmagan avliyo haqidagi afsonalar bilan bog\'liq',
        'Maqbara qadimiy manzilgohlar va eski karvon yo\'llari qoldiqlari yaqinida joylashgan'
      ],
      qq: [
        'Qaraqalpaqstanda qadirlenetuǵın sufiy mazarlarınıń biri',
        '«Keshirmes» atawı ótirik pen satqınlıqtı keşirmeytuǵın áwliye haqqındaǵı rivayatlar menen baylanıslı',
        'Maqbara qadimgi qonıslar hám eski kerwen jolları qaldıqları jaqınında jaylasqan'
      ]
    },
  },
  {
    id: 'seyt-ahun',
    name: { ru: 'Мавзолей Сейит-Ахун', en: 'Seyt Ahun Mausoleum', uz: 'Sayyid Ahun maqbarasi', qq: 'Seyyid Ahun maqbarası' },
    category: 'mausoleums', coords: [42.38, 59.48], century: 'XVI в.',
    facts: {
      ru: ['Мавзолей сельского религиозного лидера, известного толкованием Корана', 'Сохранились уникальные деревянные резные двери — образец каракалпакского деревянного зодчества', 'Местные жители считают его защитником от засухи — приходят молиться о дожде'],
      en: ['Mausoleum of a rural religious leader known for his interpretation of the Quran', 'Unique carved wooden doors have survived — an example of Karakalpak wooden architecture', 'Local residents consider him a protector against drought — they come to pray for rain'],
      uz: ['Qur\'onni talqin qilish bilan tanilgan qishloq diniy rahbariga tegishli maqbara', 'Noyob o\'yma yog\'och eshiklar saqlanib qolgan — qoraqalpoq yog\'och me\'morchiligining namunasi', 'Mahalliy aholi uni qurg\'oqchilikdan himoyachi deb biladi — yomg\'ir tilab ibodat qilgani keladi'],
      qq: ['Qurandı tálqın etiw menen belgili qıshloq diniy basshısına tiyisli mazar', 'Nádiri oyma aǵash eshikler saqlanǵan — qaraqalpaq aǵash arxitekturasınıń úlgisi', 'Jergilikli halıq onı qurǵaqshılıqtan qamqor dep biledi — jawın tilewge ibadat etiwge keledi'],
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
      qq: ['Sovet dáwiri Orta Aziyasınıń birinshi muzeylerinen biri retinde 1929 jılı shólkemlestirilgen', 'Qaraqalpaq qolóner óneriniń keń kórmesın saqlaydı — zergerlik buyımları, gileler hám otawlar', 'Arxeologiyalıq kórme bronza dáwirinen orta ásirge shekem bolǵan dáwirdi qamlap aladı'],
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
  {
    id: 'shamuratov-house-museum',
    name: {
      ru: 'Дом-музей Амета и Айымхана Шамуратовых',
      en: 'Amet and Ayymkhan Shamuratov House Museum',
      uz: 'Amet va Ayimxon Shamuratovlar uy-muzeyi',
      qq: 'Amet hám Ayımxan Shamuratovlar úy-muzeyi'
    },
    category: 'museums',
    coords: [42.46, 59.61],
    century: '1989',
    facts: {
      ru: [
        'Музей посвящён известным деятелям каракалпакского театра и культуры',
        'В экспозиции представлены личные вещи, сценические костюмы и архивные фотографии семьи Шамуратовых',
        'Дом-музей считается важным центром изучения истории каракалпакского искусства XX века'
      ],
      en: [
        'The museum is dedicated to prominent figures of Karakalpak theater and culture',
        'The exhibition includes personal belongings, stage costumes, and archival photographs of the Shamuratov family',
        'The house museum is considered an important center for studying the history of 20th-century Karakalpak art'
      ],
      uz: [
        'Muzey qoraqalpoq teatri va madaniyatining mashhur namoyandalariga bag\'ishlangan',
        'Ekspozitsiyada Shamuratovlar oilasining shaxsiy buyumlari, sahna liboslari va arxiv suratlari namoyish etilgan',
        'Uy-muzey XX asr qoraqalpoq san\'ati tarixini o\'rganishning muhim markazlaridan biri hisoblanadi'
      ],
      qq: [
        'Muzey qaraqalpaq teatrı hám mádeniyatınıń belgili wákillerine arnalǵan',
        'Ekspoziciyada Shamuratovlar shańaraqınıń jeke buyımları, sahna kiyimleri hám arxiv suretleri kórsetilgen',
        'Úy-muzey XX ásir qaraqalpaq óneri tariyxın úyreniwdiń áhmiyetli oraylarınıń biri esaplanadı'
      ]
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
    category: 'nature', coords: [43.20, 56.50], century: '', featured: true,
    facts: {
      ru: ['Огромное плато площадью около 200 000 кв. км, простирающееся между Аральским морем и Каспием — одно из крупнейших в мире', 'На краях плато находятся грандиозные обрывы (чинки) высотой от 100 до 300 метров — одно из самых впечатляющих природных чудес региона', 'На плато сохранились загадочные «стрелы» — V-образные каменные сооружения, использовавшиеся тысячелетия назад для массовой охоты на сайгаков'],
      en: ['An enormous plateau of about 200,000 sq km stretching between the Aral Sea and the Caspian — one of the largest in the world', 'At the edges of the plateau there are grand cliffs (chinks) 100 to 300 meters high — one of the most impressive natural wonders of the region', 'On the plateau, mysterious "arrows" have been preserved — V-shaped stone structures used thousands of years ago for mass hunting of saiga antelopes'],
      uz: ['Orol dengizi va Kaspiy o\'rtasida cho\'zilgan taxminan 200 000 kv km yuzasi bilan ulkan yassitog\'lik — dunyodagi eng kattalaridan biri', 'Yassitog\'likning chekkasida 100 dan 300 metrgacha balandlikdagi muhtasham qoyalar (chinklar) bor — mintaqaning eng hayratlanarli tabiiy mo\'jizalaridan biri', 'Yassitog\'likda sirli "o\'qlar" saqlanib qolgan — ming yillar oldin saygalarga ommaviy ov qilish uchun foydalanilgan V-shaklidagi tosh inshootlar'],
      qq: ['Aral teńizi hám Kaspiy arasında sozılǵan taxmınan 200 000 kv km maydanı menen úlken plato — dúnyadaǵı eń irilерiniń biri', 'Platoniń shettерinde 100 den 300 metrge shekem biyiklikteği minnetli jarlıqlar (chinkler) bar — aymaqdıń eń hayran qaldırǵısh tábiyat mújiyzelerinen biri', 'Platoda sirli «oqlar» saqlanǵan — mıń jıllar aldın saygalardı toparlap awlawǵa paydalanılǵan V-sheklі tас ınshawlar'],
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
  {
    id: 'sarykamysh-lake',
    name: { ru: 'Сарыкамышское озеро', en: 'Sarykamysh Lake', uz: 'Sariqamish koli', qq: 'Sarıqamıs kóli' },
    category: 'nature', coords: [41.90, 57.40], century: '',
    facts: {
      ru: ['Озеро образовалось из сбросных ирригационных вод — один из парадоксов Приаральского экологического кризиса', 'Сегодня является одним из крупнейших водоёмов региона и важным птичьим заповедником', 'Обитают редкие виды птиц: фламинго, пеликан, колпица'],
      en: ['The lake formed from irrigation discharge water — one of the paradoxes of the Aral Sea ecological crisis', 'Today it is one of the largest water bodies in the region and an important bird sanctuary', 'Rare bird species inhabit it: flamingo, pelican, spoonbill'],
      uz: ['Ko\'l sug\'orish tashlama suvlaridan hosil bo\'lgan — Orolbo\'yi ekologik inqirozining paradokslaridan biri', 'Bugungi kunda mintaqadagi eng yirik suv havzalaridan biri va muhim qushlar qo\'riqxonasi', 'Noyob qush turlari yashaydi: qizg\'ish, pelikan, qoshiqtumshuq'],
      qq: ['Kól suwlandırıw taslaw suwlarınan payda bolǵan — Aral boyı ekologiyalıq krizisiniń paradokslarınan biri', 'Búgin aymaqtaǵı eń iri suw kóllerinen biri hám áhmiyetli qus qorıqhanası', 'Siyrek qus túrleri jasaydı: flamingo, pelikan, qashıq ómzı'],
    },
  },
  {
    id: 'ustyurt-chinks',
    name: { ru: 'Чинки Устюрта', en: 'Ustyurt Chinks', uz: 'Ustyurt chinqlari', qq: 'Ústirt shıńqarları' },
    category: 'nature', coords: [42.80, 56.80], century: '',
    facts: {
      ru: ['Обрывистые края плато Устюрт высотой до 300 метров — одно из самых грандиозных природных явлений региона', 'Геологический разрез чинков обнажает породы от мела до неогена — наглядная книга истории земли', 'Место обитания редкого устюртского муфлона и джейрана'],
      en: ['The steep edges of the Ustyurt Plateau up to 300 meters high — one of the most grandiose natural phenomena of the region', 'The geological section of the chinks exposes rocks from the Cretaceous to the Neogene — a vivid book of earth history', 'Habitat of the rare Ustyurt mouflon and gazelle'],
      uz: ['Ustyurt platosining 300 metrgacha balandlikdagi qoyali qirralari — mintaqaning eng grandioz tabiiy hodisalaridan biri', 'Chinqlarning geologik kesmasi Kretaçedan Neogengacha bo\'lgan jinslari ochib beradi — yer tarixining ko\'rgazmali kitobi', 'Noyob Ustyurt mufloni va jayronning yashash joyi'],
      qq: ['Ústirt platosınıń 300 metrge shekem biyiklikteği jarqabaqlı qıyları — aymaqtıń eń grAndioZ tábiyat qubyılıslarınan biri', 'Chinklerdiń geologiyalıq kessisi Bor dáwirinen Neogenege shekem jınıslardı ashadı — jer tariyxınıń kórmeli kitabı', 'Siyrek Ústirt uflonı hám jayrandıń jasaytın jeri'],
    },
  },
  {
    id: 'amudarya-tugai',
    name: { ru: 'Тугайные леса Амударьи', en: 'Amudarya Tugai Forests', uz: 'Amudaryo toʻqay oʻrmonlari', qq: 'Ámiwdárya tóqay ormanları' },
    category: 'nature', coords: [41.60, 61.10], century: '',
    facts: {
      ru: ['Реликтовые пойменные леса из тополя, лоха и тростника вдоль берегов Амударьи', 'Один из последних крупных массивов тугаев в Центральной Азии — критически важный биотоп', 'Место обитания бухарского оленя, камышового кота и многих редких птиц'],
      en: ['Relic floodplain forests of poplar, oleaster, and reeds along the banks of the Amu Darya', 'One of the last large areas of tugai in Central Asia — a critically important biotope', 'Habitat of the Bukhara deer, jungle cat, and many rare birds'],
      uz: ['Amudaryo qirg\'oqlari bo\'ylab terak, jiyda va qamishdan iborat relikt qirg\'oq o\'rmonlari', 'Markaziy Osiyodagi to\'qaylarning so\'nggi yirik massivlaridan biri — muhim biotop', 'Buxoro bugʻusi, qamishzor mushugi va ko\'plab noyob qushlarning yashash joyi'],
      qq: ['Ámiwdárya jaqaları boyında terек, jiyda hám qamıstan ibarat relikt jağa ormanları', 'Orta Aziyada tóqaylardıń aqırǵı iri massivlerinen biri — áhmiyetli biotop', 'Buxara maralı, qamıshdıq mısıq hám kóp sanawlı siyrek quslar jasaytın jer'],
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
  {
    id: 'hazorasp-ancient',
    name: { ru: 'Хазарасп (древние слои)', en: 'Hazarasp Ancient Layers', uz: 'Xazarasp (qadimiy qatlamlar)', qq: 'Xazarasp (gadimgi qatlamlar)' },
    category: 'settlements', coords: [41.32, 61.07], century: 'IV в. до н.э.',
    facts: {
      ru: ['Один из древнейших непрерывно обитаемых городов Хорезма — от античности до наших дней', 'Название означает «тысяча лошадей» — отсылка к традиции коневодства', 'Обнаружены культурные слои, охватывающие более 2500 лет непрерывного обитания'],
      en: ['One of the oldest continuously inhabited cities of Khorezm — from antiquity to the present', 'The name means "thousand horses" — a reference to the tradition of horse breeding', 'Cultural layers spanning more than 2500 years of continuous habitation were found'],
      uz: ['Qadimiyatdan to hozirgi kungacha uzluksiz aholi yashaydigan Xorazmning eng qadimiy shaharlaridan biri', 'Nomi "ming ot" degan ma\'noni anglatadi — chorvachilik an\'anasiga ishora', '2500 yildan ortiq uzluksiz yashashni qamrab oluvchi madaniy qatlamlar aniqlangan'],
      qq: ['Gadimgilikten házirgi kúnge shekem úzliksiz halıq jasaytın Xorezmniń eń gadimgi qalalarınan biri', 'Atı "mıń at" degen mánisti bildirredi — at baqıw dástúrine isharа', '2500 jıldan artıq úzliksiz mekenlestiriwdi qamlap alǵan mádeniyet qatlamlary tabılǵan'],
    },
  },
  {
    id: 'kerder-settlement',
    name: { ru: 'Кердер (городище)', en: 'Kerder Settlement', uz: 'Kerder (shaharcha)', qq: 'Kerder (qalashası)' },
    category: 'settlements', coords: [43.10, 59.30], century: 'VII-XII в.',
    facts: {
      ru: ['Крупное средневековое городище в северном Каракалпакстане', 'Центр исторической области Кердер, упоминаемой в арабских источниках', 'Остатки городских стен, мечети и жилых кварталов хорошо прослеживаются в рельефе'],
      en: ['A large medieval settlement in northern Karakalpakstan', 'Center of the historical region of Kerder, mentioned in Arab sources', 'Remains of city walls, mosque, and residential quarters are well visible in the terrain'],
      uz: ['Shimoliy Qoraqalpog\'istondagi yirik o\'rta asrlar shaharchasi', 'Arab manbalarida tilga olingan tarixiy Kerder viloyatining markazi', 'Shahar devorlari, masjid va turar-joy kvartallarining qoldiqlari releyfda yaxshi ko\'zga tashlanadi'],
      qq: ['Tústik Qaraqalpaqstanniń iri orta ásir qalashası', 'Arab dereklerinde atalatın tariyxıy Kerder wilayatınıń orayı', 'Qala diywalları, meshit hám turarjay kvartallarınıń qaldıqları relyefde jaqsı kórinedi'],
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
  {
    id: 'keltiminar-sites',
    name: { ru: 'Памятники культуры Кельтеминар', en: 'Keltiminar Culture Sites', uz: 'Kelteminor madaniyati yodgorliklari', qq: 'Kelteminár mádeniyet yadgorlıqları' },
    category: 'other', coords: [42.20, 60.00], century: 'IV-II тыс. до н.э.',
    facts: {
      ru: ['Стоянки охотников, рыболовов и собирателей эпохи неолита и энеолита', 'Культура Кельтеминар — одна из наиболее изученных неолитических культур Средней Азии', 'Характерная расписная керамика и наконечники стрел из кремня — визитная карточка культуры'],
      en: ['Campsites of hunters, fishermen, and gatherers of the Neolithic and Eneolithic era', 'Keltiminar culture is one of the most studied Neolithic cultures of Central Asia', 'Characteristic painted ceramics and flint arrowheads are the hallmark of the culture'],
      uz: ['Neolit va eneolit davrining ovchilar, baliqchilar va terimchilarning turar joylari', 'Kelteminor madaniyati — O\'rta Osiyoning eng ko\'p o\'rganilgan neolit madaniyatlaridan biri', 'Xarakterli bo\'yalgan kulolchilik va kremniyli o\'q uchlari madaniyatning belgisidir'],
      qq: ['Neolit hám eneolitt dáwiriniń awshılar, balıqshılar hám teriwshilerdiń tıyınaq joyleri', 'Kelteminár mádeniyeti — Orta Aziyaniń eń kóp úyrenilgen neolit mádeniyetlerinen biri', 'Xarakterli boyalǵan kulalshlıq hám kremniy oq ushları mádeniyettiń belgisi'],
    },
  },
  {
    id: 'tazabagiab-sites',
    name: { ru: 'Памятники Тазабагьябской культуры', en: 'Tazabagiab Culture Sites', uz: 'Tazabagʻyob madaniyati yodgorliklari', qq: 'Tazabagıyab mádeniyet yadgorlıqları' },
    category: 'other', coords: [41.80, 60.20], century: 'II тыс. до н.э.',
    facts: {
      ru: ['Памятники оседло-скотоводческих племён эпохи поздней бронзы в дельте Амударьи', 'Первые в регионе свидетельства перехода к земледелию и разведению скота', 'Обнаружены жилища-землянки с очагами и загоны для скота'],
      en: ['Monuments of sedentary-pastoral tribes of the Late Bronze Age in the Amu Darya delta', 'The earliest evidence in the region of the transition to farming and cattle breeding', 'Pit-houses with hearths and cattle enclosures were found'],
      uz: ['Amudaryo deltasida so\'nggi bronza davrining o\'troq-chorvachilik qabilalari yodgorliklari', 'Mintaqada dehqonchilik va chorvachilikka o\'tishning dastlabki dalillari', 'O\'choqli yer osti uylari va chorva mollari to\'xtatib turiladigan joylar topilgan'],
      qq: ['Ámiwdárya deltasında sońǵı bronza dáwiriniń otraq-malshılıq qabilaları yadgorlıqları', 'Aymaqta dehqanshılıq hám malshılıqqa ótiwdiń birinshi dálilleri', 'Ojaqlar menen jer ástindegi turarjaylar hám mal aylanbaları tabılǵan'],
    },
  },
  {
    id: 'ancient-canals',
    name: { ru: 'Древние ирригационные каналы Хорезма', en: 'Ancient Khorezm Irrigation Canals', uz: 'Qadimiy Xorazm sug\'orish kanallari', qq: 'Gadimgi Xorezm suwlandırıw kanalları' },
    category: 'other', coords: [41.85, 60.40], century: 'IV в. до н.э.',
    facts: {
      ru: ['Разветвлённая сеть каналов протяжённостью сотни километров орошала оазис Хорезма на протяжении тысячелетий', 'Некоторые магистральные каналы достигали ширины 30–40 метров и использовались вплоть до XIV века', 'Хорошо видны с воздуха как тёмные полосы на светлом фоне пустыни'],
      en: ['A branching network of canals hundreds of kilometers long irrigated the Khorezm oasis for millennia', 'Some main canals reached 30–40 meters in width and were used until the 14th century', 'Clearly visible from the air as dark stripes on the light background of the desert'],
      uz: ['Yuzlab kilometr uzunlikdagi tarmoqlangan kanallar tarmog\'i ming yillar davomida Xorazm vohani sug\'organ', 'Ba\'zi asosiy kanallar 30–40 metr kenggacha yetgan va XIV asrgacha ishlatilgan', 'Cho\'l och fonida qoʻngʻir chiziqlar sifatida havоdan yaxshi ko\'rinadi'],
      qq: ['Júzlergen kilometr uzınlıqtaǵı tarmaqlasqan kanallar tarmaqı mıń jıllar dawamında Xorezm wayxasın suwlandırǵan', 'Ayırım tiykarǵı kanallar 30–40 metr kеńligine jetken hám XIV ásirge shekem paydalanılǵan', 'Shól aq fondá qara jolaqlar retinde hawadan jaqsı kórinedi'],
    },
  },
  {
    id: 'kanguy-monuments',
    name: { ru: 'Памятники Кангюйского периода', en: 'Kanguy Period Monuments', uz: 'Qangʻuy davri yodgorliklari', qq: 'Qańǵıy dáwiri yadgorlıqları' },
    category: 'other', coords: [42.10, 60.10], century: 'II в. до н.э. — IV в.',
    facts: {
      ru: ['Свидетельства Кангюйского государства — одного из малоизученных образований степной Евразии', 'Характерная керамика и украшения помогли выделить кангюйский культурный горизонт в регионе', 'Кангюй упоминается в китайских хрониках как сильное кочевническое государство'],
      en: ['Evidence of the Kanguy state — one of the little-studied formations of steppe Eurasia', 'Characteristic ceramics and ornaments helped identify the Kanguy cultural horizon in the region', 'Kanguy is mentioned in Chinese chronicles as a powerful nomadic state'],
      uz: ['Qang\'uy davlatining dalillari — cho\'l Yevrosiyasining kam o\'rganilgan tuzilmalaridan biri', 'Xarakterli kulolchilik va bezaklar mintaqadagi qang\'uy madaniy ufqini ajratishga yordam berdi', 'Qang\'uy xitoy yilnomalarida kuchli ko\'chmanchi davlat sifatida tilga olinadi'],
      qq: ['Qańǵıy mámleketiniń dálilleri — shól Yevraziyasınıń az úyrenilgen qurılımlarınan biri', 'Xarakterli kulalshlıq hám bezekler aymaqtaǵı qańǵıy mádeniyet gorızontın ajıratıwǵa járdem berdi', 'Qańǵıy Xıtay jılnamaların da qúwatlı kóshpeli mámlekett retinde ataladı'],
    },
  },
  {
    id: 'zoroastrian-ossuaries',
    name: { ru: 'Зороастрийские оссуарии Хорезма', en: 'Khorezm Zoroastrian Ossuaries', uz: 'Xorazm zardushtiy ossuariylari', qq: 'Xorezm zardushtıylıq ossuuriyları' },
    category: 'other', coords: [41.87, 60.55], century: 'IV-VII в.',
    facts: {
      ru: ['Глиняные сосуды-оссуарии для хранения очищенных костей умерших — центральный элемент зороастрийского погребального обряда', 'Хорезмские оссуарии отличаются богатым скульптурным декором с мифологическими сценами', 'Являются важнейшим источником по искусству и религиозным представлениям древнего Хорезма'],
      en: ['Clay ossuary vessels for storing cleaned bones of the dead — a central element of Zoroastrian burial rite', 'Khorezm ossuaries are distinguished by rich sculptural decor with mythological scenes', 'Are the most important source for the art and religious beliefs of ancient Khorezm'],
      uz: ['Marhumning tozalangan suyaklarini saqlash uchun loy ossuuriy idishlar — zardushtiylik dafn marosimining markaziy elementi', 'Xorazm ossuuriylari mifologik sahnalar bilan boy haykaltaroshlik bezagi bilan ajralib turadi', 'Qadimiy Xorazmning san\'ati va diniy qarashlari bo\'yicha eng muhim manba hisoblanadi'],
      qq: ['Marhúmniń tazalanǵan sóyeklerin saqlawǵa arnalǵan gúl ossuuriy ıdıslar — zardushtıylıq dapn ritualınıń oray elementi', 'Xorezm ossuuriyları mifologiyalıq sahnalar menen bay heykeltarashлıq bezeniw menen ajıraladı', 'Gadimgi Xorezm óneri hám diniy kóz-qarasları boyınsha eń áhmiyetli derek'],
    },
  },
  {
    id: 'silk-road-ribats',
    name: { ru: 'Рибаты Шёлкового пути', en: 'Silk Road Ribats', uz: 'Ipak yoʻli ribotlari', qq: 'Jibek jolı ribatları' },
    category: 'other', coords: [41.70, 60.40], century: 'IX-XII в.',
    facts: {
      ru: ['Укреплённые постоялые дворы для торговых и военных караванов вдоль ветвей Шёлкового пути', 'Рибаты выполняли одновременно функции гостиницы, склада и мечети', 'Некоторые выросли в крупные торговые города — свидетельство важности Хорезма на Великом Шёлковом пути'],
      en: ['Fortified inns for trade and military caravans along the branches of the Silk Road', 'Ribats simultaneously served as hotels, warehouses, and mosques', 'Some grew into large trading cities — evidence of Khorezm\'s importance on the Great Silk Road'],
      uz: ['Ipak yo\'li tarmoqlari bo\'ylab savdo va harbiy karvonlar uchun mustahkamlangan karvonsaroylar', 'Ribotlar bir vaqtning o\'zida mehmonxona, ombor va masjid vazifasini bajargan', 'Ba\'zilari yirik savdo shaharlariga aylangan — Buyuk Ipak yo\'lida Xorazmning ahamiyatini ko\'rsatuvchi dalil'],
      qq: ['Jibek jolı tarmaqlary boyında sawda hám harbiy kervanlary ushın bekkemlengen kervansaraylar', 'Ribatlar bir waqıtta meymanhana, ambar hám meshit wazıypasın atqarǵan', 'Ayırımları iri sawda qalaların ósip shıqqan — Ullı Jibek jolında Xorezmniń áhmiyetin kórsetiwshi dálil'],
    },
  },
  {
    id: 'fire-altars',
    name: { ru: 'Огневые алтари древнего Хорезма', en: 'Fire Altars of Ancient Khorezm', uz: 'Qadimiy Xorazm olov qurbongohlari', qq: 'Gadimgi Xorezm ot qurbangedileri' },
    category: 'other', coords: [41.90, 60.62], century: 'IV в. до н.э. — VII в.',
    facts: {
      ru: ['Культовые сооружения для поддержания священного огня — основы зороастрийского богослужения', 'Алтари огня обнаружены в большинстве крупных крепостей и городищ Хорезма', 'Некоторые алтари непрерывно горели сотни лет — их зола достигала высоты нескольких метров'],
      en: ['Cult structures for maintaining the sacred fire — the basis of Zoroastrian worship', 'Fire altars were found in most major fortresses and settlements of Khorezm', 'Some altars burned continuously for hundreds of years — their ash reached several meters in height'],
      uz: ['Zardushtiylik ibodat asosi — muqaddas olovні saqlаб turish uchун kultlik inshootlar', 'Olov qurbongohlari Xorazmning ko\'pchilik yirik qalʼa va shahar xarobalarida topilgan', 'Ba\'zi qurbongohlar yuzlab yil uzluksiz yongan — ularning kuli bir necha metrgacha balandlikka yetgan'],
      qq: ['Zardushtıylıq ibadat tiykarı — muqaddes otdı saqlap turıw ushın kultlik inshawlar', 'Ot qurbangedileri Xorezmniń kóp sanawlı iri qalaları hám qalashalarında tabılǵan', 'Ayırım qurbangediler júzlergen jıl úzliksiz janıp turǵan — olardiń kúli bir neshe metrge shekem biyikligine jetken'],
    },
  },
  {
    id: 'aral-port-ruins',
    name: { ru: 'Остатки Аральского порта', en: 'Aral Port Ruins', uz: 'Orol porti qoldiqlari', qq: 'Aral portı qaldıqları' },
    category: 'other', coords: [43.78, 58.72], century: 'XIX-XX в.',
    facts: {
      ru: ['Руины советского рыболовного порта, обнажившиеся по мере отступления Аральского моря', 'В советские годы порт Муйнака ежегодно отправлял десятки тысяч тонн рыбы по всему СССР', 'Сегодня является памятником исчезнувшей цивилизации рыбаков и свидетелем экологической трагедии'],
      en: ['Ruins of a Soviet fishing port, exposed as the Aral Sea receded', 'In Soviet years, the port of Muynak shipped tens of thousands of tons of fish across the USSR annually', 'Today it is a monument to the vanished civilization of fishermen and a witness to ecological tragedy'],
      uz: ['Orol dengiziining chekinishi bilan oshkor bo\'lgan sovet baliqchilik portuning xarobalari', 'Sovet yillarida Moʻynoq porti yiliga o\'n minglab tonna baliqni butun SSSR bo\'ylab jo\'natgan', 'Bugungi kunda baliqchilarning yo\'qolgan sivilizatsiyasining yodgorligi va ekologik fojia guvohi'],
      qq: ['Aral teńiziniń khetiwi menen ashılǵan sovet balıqshılıq portınıń xarabaları', 'Sovet jıllarında Moyınaq portı jıllıq on mıńlaǵan tonna balıqdı pútkil SSRJge jibertken', 'Búgin balıqshılardıń joq bolǵan sivilizatsiyasınıń yadgorlıǵı hám ekologiyalıq fajianıń kúwası'],
    },
  },
  {
    id: 'medieval-bazaars',
    name: { ru: 'Исторические базары Приаралья', en: 'Historical Bazaars of the Aral Region', uz: 'Orolboʻyi tarixiy bozorlari', qq: 'Aral boyı tariyxıy bazarları' },
    category: 'other', coords: [42.45, 59.50], century: 'X-XIX в.',
    facts: {
      ru: ['Торговые площади исторических городов Приаралья, где пересекались пути из Хорезма, Казахстана и Персии', 'В средневековые базары Ходжейли, Кунграда и Чимбая привозили ткани, специи и металлические изделия', 'Часть торговых традиций сохранилась до наших дней в еженедельных базарах каракалпакских городов'],
      en: ['Trading squares of historical cities of the Aral region, where routes from Khorezm, Kazakhstan, and Persia intersected', 'Medieval bazaars of Khodjeyli, Kungrad, and Chimbay imported fabrics, spices, and metal goods', 'Some trading traditions have survived to the present day in the weekly bazaars of Karakalpak cities'],
      uz: ['Xorazm, Qozog\'iston va Eron yo\'llari kesishgan Orolbo\'yi tarixiy shaharlarining savdo maydonlari', 'Xo\'jayli, Qo\'ng\'irot va Chimboy o\'rta asr bozorlariga matolar, ziravorlar va metall mahsulotlar keltirilgan', 'Savdo an\'analarining bir qismi qoraqalpoq shaharlarining haftalik bozorlarida bizning kunlargacha yetib kelgan'],
      qq: ['Xorezm, Qazaqstan hám İran jolları kesisken Aral boyı tariyxıy qalaları sawda maydanları', 'Xojaylı, Qońǵırat hám Shımbaydıń orta ásir bazarlarına matalar, dárewilar hám metal buyımlar keltirilgen', 'Sawda dástúrleriniń bir bólegi qaraqalpaq qalaları háptelik bazarlarında bizdiń kúnlerimizge shekem jetip kelgen'],
    },
  },
 
  // Additional monuments
  {
    id: 'kurgancha-kala',
    name: {
      ru: 'Курганча-кала',
      en: 'Kurgancha-Kala',
      uz: 'Qo\'rg\'oncha qalʼa',
      qq: 'Qorǵansha qala'
    },
    category: 'fortresses',
    coords: [41.90, 60.80],
    century: 'IV–III вв. до н.э.',
    facts: {
      ru: [
        'Древнее городище и крепость эпохи античного Хорезма',
        'Крепость была окружена мощными оборонительными стенами и башнями',
        'Археологи обнаружили здесь остатки жилых помещений и хозяйственных построек'
      ],
      en: [
        'An ancient settlement and fortress of the Antique Khorezm period',
        'The fortress was surrounded by strong defensive walls and towers',
        'Archaeologists discovered remains of residential and farm buildings here'
      ],
      uz: [
        'Qadimgi Xorazm davriga oid qadimiy shahar va qalʼa',
        'Qalʼa mustahkam mudofaa devorlari va minoralar bilan o\'ralgan edi',
        'Arxeologlar bu yerda turar joy va xo\'jalik binolari qoldiqlarini topgan'
      ],
      qq: [
        'Qadimgi Xorezm dáwirine tiyisli qala hám eski qalʼa',
        'Qala kúshli qorǵanıs divarları hám minaralar menen qorshalǵan',
        'Arxeologlar bul jerde turǵın jaylar hám xojalıq imaratlarınıń qaldıqların tapqan'
      ],
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
    excerpt: { ru: 'Международная команда начала масштабную реставрацию в одной из крупнейших крепостей древнего Хорезма.', en: 'An international team has begun a large-scale restoration of one of the largest fortresses of ancient Khorezm.', uz: 'Xalqaro jamoa qadimiy Xorazmda eng yirik qalʼalardan birini keng koʻlamda tiklashni boshladi.', qq: 'Xalıqaralıq komanda gadimgi Xorezmdegi eń iri qalalardan birin keŋ kólemde tiklawdı basladi.' },
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