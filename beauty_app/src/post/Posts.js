// import car from '../assets/Car.png';
import stati3 from '../../public/stati3.jpg';
import stati4 from '../../public/stati4.jpg';
import stati1 from '../../public/stati2.jpg';
import stati2 from '../../public/stati1.jpg';
import stati5 from '../../public/stati5.jpg';
import stati322 from '../../public/stati322.jpg';
import video1 from '../../public/video1.mp4';
import video2 from '../../public/video2.mp4';
import video3 from '../../public/video3.mp4';
import video4 from '../../public/video4.mp4';



  
export let posts = [
    {
        id: 1,
        imagePost: stati2, 
        title: "Табиғи косметика туралы мифтер мен шындық",
        video: null,
        textBlog:
            "Табиғи косметика - соңғы жылдары белсенді түрде танымал болған тренд. Өндірушілер мұндай өнімдер қауіпсіз, экологиялық таза және тиімді деп уәде етеді. Дегенмен, табиғи косметикаға қатысты көптеген аңыздар бар және олардың қайсысы шындыққа жанаспайтынын түсіну маңызды.",
        full_text: [
            {
                myth: "Миф 1: Табиғи косметика әрқашан қауіпсіз",
                fact: "Шындық: Табиғи ингредиенттер қауіпсіз болып көрінгенімен, бұл әрдайым бола бермейді. Кейбір табиғи компоненттер аллергиялық реакцияларды, қабынуды немесе тітіркенуді тудыруы мүмкін. Мысалы, эфир майлары, кейбір өсімдік сығындылары немесе жаңғақ майлары аллергия тудыруы мүмкін. Тіпті табиғи ингредиенттер, әсіресе сезімтал теріге ие адамдар үшін сақтықты қажет ететінін есте ұстаған жөн."
            },
            {
                myth: "Миф 2: Табиғи косметика құрамында химиялық заттар жоқ",
                fact: "Шындық: Тіпті табиғи тағамдардың өзінде сақтау мерзімін ұзартуға және дәмді жақсартуға көмектесетін консерванттар немесе хош иістендіргіштер сияқты синтетикалық заттар қосылған болуы мүмкін. Кейбір жағдайларда өндірушілер өз жұмысын тиімді орындайтын қауіпсіз химиялық заттарды пайдалана алады, бірақ бұл қоспалар кейде табиғи косметика жанкүйерлерінің наразылығын тудыруы мүмкін."
            },
            {
                myth: "Миф 3: Табиғи косметика барлық тері түрлеріне жарамды",
                fact: "Шындық: Табиғи өнімдердің барлығы барлық тері түрлеріне жарамайды. Мысалы, жаңғақ негізіндегі майлар майлы тері үшін тым ауыр болуы мүмкін, ал цитрус сығындылары сезімтал адамдар үшін тітіркендіргіш болуы мүмкін. Өнімдерді таңдау олардың «табиғидығына» ғана емес, сонымен қатар теріңіздің қажеттіліктеріне де негізделуі керек екенін түсіну маңызды."
            },
            {
                myth: "Миф 4: Табиғи косметика әрқашан тиімді",
                fact: "Шындық: Косметиканың тиімділігі оның табиғи құрамына ғана байланысты емес. Табиғи ингредиенттер ретиноидтар немесе пептидтер сияқты синтетикалық ингредиенттерге қарағанда аз тұрақтандырылуы немесе баяу әрекет етуі мүмкін. Табиғи косметика көзге көрінетін нәтижелерге жету үшін ұзағырақ уақыт алуы мүмкін екенін есте ұстаған жөн, әсіресе безеу немесе қартаю белгілері сияқты тері проблемаларымен күресу кезінде."
            },
            {
                myth: "Миф 5: Табиғи косметикада улы заттар жоқ",
                fact: "Шындық: Кейбір табиғи ингредиенттер жоғары дозада пайдаланылса, улы немесе қауіпті болуы мүмкін. Мысалы, папоротник сияқты өсімдіктер дұрыс пайдаланылмаса улы болуы мүмкін. Бұл косметиканы таңдауда, тіпті егер олар «табиғи» деп белгіленген болса да, хабардарлық пен ғылымның маңыздылығын көрсетеді."
            },
            {
                myth: "Миф 6: Табиғи косметика қоршаған ортаға зиянсыз",
                fact: "Шындық: Ең дұрысы, табиғи косметика экологиялық таза болуы керек, бірақ бұл әрдайым бола бермейді. Қоршаған ортаға қатысты мәселелер ингредиенттерді алу тәсілінен, орауыштан немесе ресурстарды шамадан тыс пайдаланудан туындауы мүмкін. Мысалы, экологиялық тұрғыдан сезімтал аймақтарда өсетін өсімдіктер экожүйелердің деградациясына әкелуі мүмкін. Биологиялық ыдырайтын қаптама және сертификатталған жасыл ингредиенттер сияқты тұрақтылықты ескере отырып косметиканы таңдау маңызды."
            },
            {
                myth: "Миф 7: Табиғи косметиканың жанама әсері жоқ",
                fact: "Шындық: Тіпті табиғи косметика жанама әсерлерді тудыруы мүмкін. Мысалы, шөп сығындылары немесе эфир майлары теріңіздің түріне сәйкес келмесе, тітіркенуді тудыруы мүмкін. Салицил қышқылы немесе шай ағашы майы сияқты кейбір ингредиенттер тым жиі қолданылған жағдайда теріңізді құрғатуы мүмкін."
            }
        ],
        categoria: "Interesting"
    },
    {
        id: 2,
        imagePost: stati1,
        video: video2,
        title: "2024 жылы тері күтіміндегі трендтер",
        textBlog: "Жыл сайын тері күтімі индустриясы жаңашылдыққа және жеке қажеттіліктерге негізделген шешімдерге көбірек бағытталады. 2024 жылы негізгі трендтер тұрақтылыққа, технологиялық шешімдерге және минимализмге сүйенеді. Биылғы жылы косметика мен тері күтімі нарығын анықтайтын негізгі бағыттарға назар аударайық.",
        full_text: [
          {
            myth: "Скинтеграция: минимализм және көпфункционалдылық",
            fact: "«Аз – көп» деген қағида өзектілігін жоймайды. 2024 жылы өнімдер санын қысқарту үрдісі жалғасып, көпфункционалды құралдарға сұраныс артады. Бір уақытта ылғалдандырып, ультракүлгін сәуледен қорғайтын және қартаю белгілеріне қарсы тұратын сарысулар must-have өнімдерге айналуда. Бұл тәсіл уақытты үнемдеп қана қоймай, қаптаманы азайту арқылы қоршаған ортаға тигізетін әсерді төмендетеді."
          },
          {
            myth: "Жеке күтім",
            fact: "Жеке тәсіл инновациялық технологиялардың арқасында қолжетімді бола түсуде. 2024 жылы тері күйін талдайтын және күтім құралдарын таңдайтын құрылғылар мен қызметтер танымал болмақ. Мысалы, жасанды интеллектке негізделген қосымшалар терідегі өзгерістерді қадағалап, өнімдер бойынша ұсыныстар береді."
          },
          {
            myth: "Терінің микробиомын қолдау",
            fact: "Дені сау микробиом – жарқын терінің кепілі. 2024 жылы тері күтімі оның беткі қабатындағы микроағзалар теңгерімін сақтауға бағытталады. Пробиотиктер, пребиотиктер және постбиотиктер қосылған косметикалық өнімдер күнделікті күтімнің ажырамас бөлігіне айналады."
          },
          {
            myth: "Тұрақтылық және экологиялық жауапкершілік",
            fact: "Тұтынушылар қоршаған ортаға қамқорлық жасайтын брендтерді жиі таңдайды. Биыл экологиялық таза формулалары, қайта өңделетін қаптамалары және көміртек ізін азайтуға бағытталған өнімдерге басымдық беріледі. Кейбір компаниялар өнімдерінің қайта толтырылатын контейнерлерін ұсынады."
          },
          {
            myth: "Тері күтіміндегі технологиялар",
            fact: "Үй жағдайында тері күтіміне арналған құрылғылар барған сайын жетілдірілуде. LED жарығы, микротоктар және ультрадыбыстық әсерлері бар аппараттар салонға бармай-ақ кәсіби күтім жасауға мүмкіндік береді. 2024 жылы нарықта бірнеше функцияны біріктіретін ықшам гаджеттер саны арта түседі."
          },
          {
            myth: "Жаңа буын антиоксиданттары",
            fact: "Қоршаған ортаның ластануымен күрес өзекті болып қала береді. Биыл антиоксиданттарға ерекше көңіл бөлінеді, олар теріні бос радикалдардан қорғайды. Ферул қышқылы мен сирек өсімдіктер сығындылары сияқты жаңа ингредиенттер терінің қорғаныш қабатын нығайтады."
          },
          {
            myth: "Гормоналды баланс және тері күтімі",
            fact: "Жас ұлғайған сайын немесе гормоналды өзгерістер кезінде тері ерекше күтімді қажет етеді. Гормоналды тепе-теңдікті қалпына келтіруге бағытталған өнімдер трендке айналуда. Мұндай өнімдердің формулалары табиғи ингредиенттерге негізделген және олар қартаю белгілерімен, безеумен және басқа да мәселелермен күресуге көмектеседі."
          },
          {
            myth: "Табиғилыққа ұмтылыс",
            fact: "Тері мінсіз болмауы керек, ол табиғи болуы тиіс. 2024 жылы терінің табиғи жарқырауы мен текстурасын айқындайтын, ал оның кемшіліктерін жасырмайтын өнімдер танымал болмақ."
          }
        ],
        categoria: "Trends"
    },
    {
        id: 3,
        imagePost: stati3, // Укажите верный путь к изображению
        video: null,
        title: "Табиғи косметика: Барлық тері түрлеріне жарамды",
        textBlog: "Табиғи косметика қауіпсіздігі мен әмбебап қасиеттерінің арқасында күннен-күнге танымал болып келеді. Оның құрамында аллергия мен тітіркенуді азайтатын табиғи компоненттер бар. Табиғи косметиканың барлық тері түрлеріне жарамды болу себептері мен өнімдері туралы көбірек біліңіз.",
        full_text: [
            {
                myth: "Миф: Табиғи косметика синтетикалық ингредиенттерден толықтай еркін",
                fact: "Шындық: Кейбір табиғи косметикалық өнімдерде синтетикалық консерванттар немесе тұрақтылықты қамтамасыз ететін қоспалар болуы мүмкін."
            },
            {
                myth: "Миф: Табиғи өнімдер теріні аллергиядан толығымен қорғайды",
                fact: "Шындық: Кейбір табиғи ингредиенттер, мысалы, жаңғақ майлары немесе эфир майлары, сезімтал теріге реакция тудыруы мүмкін."
            },
            {
                myth: "Миф: Табиғи косметика барлық тері түрлеріне жарамды",
                fact: "Шындық: Табиғи өнімдер терінің түріне байланысты әртүрлі әсер етуі мүмкін. Мысалы, майлы теріге ауыр майлар, ал сезімтал теріге цитрус сығындылары жарамсыз болуы мүмкін."
            },
            {
                myth: "Миф: Табиғи косметика зиянсыз",
                fact: "Шындық: Кейбір табиғи компоненттерді дұрыс пайдаланбау немесе олардың жоғары концентрациясы теріні зақымдауы мүмкін."
            },
            {
                myth: "Миф: Табиғи косметика тұрақты және экологиялық таза",
                fact: "Шындық: Табиғи өнімдерді өндіру кезінде ресурстарды шамадан тыс пайдалану немесе тұрақты емес өндіріс әдістері экологиялық зиян тигізуі мүмкін."
            }
        ],
        categoria: "Tips"
    },
    {
        id: 4,
        imagePost: stati4, 
        video: video3,
        title: "Неліктен SPF күнделікті күтімнің маңызды бөлігі?",
        textBlog: "Тері күтімі туралы айтқанда, көпшілік тазарту, ылғалдандыру және қоректендіруге басымдық береді. Алайда, ең маңызды қадам – күннен қорғаныс – жиі еленбей қалады. SPF-кремді күн сайын қолдану – бұл теріңіздің денсаулығы мен жастығын сақтау үшін тек ұсыныс емес, қажеттілік. Ендеше, оның маңыздылығын бірге талдайық.",
        full_text: [
          {
            myth: "Ультракүлгін сәулелер: терінің басты жауы",
            fact: "Күн ультракүлгін (УК) сәулелерінің екі түрін шығарады, олар теріге әсер етеді: UVA-сәулелері мен UVB-сәулелері."
          },
          {
            myth: "SPF: бұл не және ол қалай жұмыс істейді?",
            fact: "SPF (Sun Protection Factor) – бұл құралдың UVB-сәулелерінен қаншалықты жақсы қорғайтынын көрсететін көрсеткіш. SPF 30 UVB-сәулелерінің шамамен 97%-ын, ал SPF 50 – 98%-ын бөгейді."
          },
          {
            myth: "SPF-ті күнделікті қолданудың артықшылықтары",
            fact: "SPF-кремді қолдану әжімдердің, пигментті дақтардың және басқа да қартаю белгілерінің пайда болу қаупін азайтады, терінің жалпы жағдайын жақсартады."
          },
          {
            myth: "SPF-кремді қалай дұрыс таңдау керек?",
            fact: "SPF 30-дан төмен емес: Күнделікті қолдануға оңтайлы деңгей. Майлы теріге – жеңіл текстуралы гельдер, құрғақ теріге – ылғалдандыратын кремдер жарамды."
          },
          {
            myth: "SPF туралы мифтер",
            fact: "SPF тек жазда қажет емес, себебі УК-сәулелер жыл бойы, тіпті қыста да белсенді."
          },
          {
            myth: "SPF-ті қалай дұрыс пайдалану керек?",
            fact: "SPF-кремді далаға шығардан 15-20 минут бұрын жағыңыз, және оны әр 2-3 сағат сайын жаңартыңыз."
          }
        ],
        categoria: "Tips"
    },      
    {
            id: 5,
            imagePost: stati5,
            video: video1,
            title: "Қысқа арналған тері күтімі",
            textBlog: "Қыста тері суықтан, желден және құрғақ ауадан зардап шегеді. Оны сау әрі әдемі күйде сақтау үшін дұрыс күтім қажет.",
            full_text: [
              {
                myth: "Ылғалдандыру",
                fact: "Қалың кремдер: ши майы, кокос майы немесе гиалурон қышқылы бар кремдерді пайдаланыңыз. Кремнен бұрын Е дәрумені мен пантенол бар сарысуларды қолданыңыз."
              },
              {
                myth: "Жұмсақ тазарту",
                fact: "Табиғи экстрактілермен тазартқыш құралдарды пайдаланып, агрессивті өнімдерден аулақ болыңыз."
              },
              {
                myth: "Суықтан қорғау",
                fact: "Қорғаныс кремдері: балауыз немесе ланолин бар өнімдер теріңізге барьер жасайды. Қыста да SPF 15-30 кремдерді қолдануды ұмытпаңыз."
              },
              {
                myth: "Еріндер мен қол күтімі",
                fact: "Еріндер үшін балауыз бен майлардан жасалған бальзамдар, қолдарға қоректендіргіш кремдер мен қолғаптарды пайдаланыңыз."
              },
              {
                myth: "Ішкі ылғалдандыру",
                fact: "Көп су ішіңіз және үйде ылғалдылықты сақтау үшін ауа ылғалдағышын пайдаланыңыз."
              }
            ],
            categoria: "Tips"
    },          
    {
        id: 6,
        imagePost: stati322,
        video: video4,
        title: "Алматыда кореялық D’Alba косметикалық бренді Golden Apple желісімен бірлесе отырып, өз өнімдерін Қазақстанда шығаруға арналған шара өткізді",
        textBlog: "Алматыда кореялық D’Alba косметикалық бренді Golden Apple желісімен бірлесе отырып, өз өнімдерін Қазақстанда шығаруға арналған шара өткізді. Іс-шара «Достық Плаза» сауда орталығында орналасқан «Алтын алма» дүкенінде өтті.",
        full_text: [
            {
                myth: "Іс-шараның негізгі хиты – итальяндық ақ трюфель қосылған көп функциялы спрей сарысуы",
                fact: "Шындық: Бұл өнім тері күтімі үшін тиімді құрал ретінде ұсынылып, көптеген қонақтардың назарын аударды."
            },
            {
                myth: "Іс-шара қонақтары танымал блогерлер мен БАҚ өкілдерімен шектелді",
                fact: "Шындық: Іс-шараға танымал қазақстандық блогерлер Aeka Posh, Жансерык Кадырбаев, Айым Сейтметова және Дилара Зинатуллина да шақырылды."
            },
            {
                myth: "Golden Apple бренді тек өнімді сату үшін ғана қатысады",
                fact: "Шындық: Golden Apple компаниясы аймақтағы тері күтімі және косметика саласындағы жетекші бөлшек саудагер ретінде өз позициясын нығайтуды мақсат етті."
            }
        ],
        categoria: "Cosmetics"
    }    
]