const  store = {
  'birdsData' : [
    [
    {
      id: 1,
      name: 'Белая куропатка',
      species: 'Lagopus lagopus',
      description: 'Обитатель тундры, тайги и лесов Северного полушария. Белая куропатка имеет нормальную температуру тела 45 °C и сохраняет её даже при сорокаградусном морозе. Длина тела 35—38 см, весит 400—700 г.',
      image: 'https://www.flickr.com/photos/alexanderalechits/41729952201/in/photolist-23FYKxq-UBnvVf-tWA23C-26zwUWv-253XqHe-2adYMn5-28VdF6Z-SceWGN-27xriUj-JaU6Ld-2aidmQg-25jVCE7-25t2Azn-UJm4HP-2hD6AYa-Rad6KV-Q7gpXv-Q5P98n-vMRWPx-pubZQv-pubZtZ-BASPYH-9SiKfZ-C4a72p-C4a6Gg-2geEszB-26j21mZ-a18Wwp-a18Wu4-a1bNjU-Cs6STG-n8w2KX-a18WKD-a1bNqh-hnr7d3-atrZXE-SNpn8q-rTWszj/',
    },
    {
      id: 2,
      name: 'Камнешарка',
      species: 'Arenaria interpres',
      description: 'Её величина составляет всего 23 см. Оперение на спине летом каштаново-коричневого цвета, грудка чёрная. Своим названием камнешарка обязана особенному способу поиска пищи, заключающемуся в переворачивании камней и ракушек на пляже.',
      image: 'https://www.flickr.com/photos/alessandrolaporta/32522680383/in/photolist-RxVeNF-27e18BD-Vewv5z-Db2if2-ixquKR-PHeYGV-PHeUiz-sAgmqg-rVHE2L-C1FbbL-28AGdSv-CquUkj-r6hA7B-CieA5Q-2h1bXHc-FQjjnh-E4eeEy-Lv5gC6-27Arpbz-dT7AGt-FWNL42-zq7VTp-qH4Y8X-2h2koHf-dT7AUV-Mqchho-fPG6w9-DXiXaa-Lv5isZ-FojsU8-fPG6y7-E6y428-ugB96F-ifMScY-fPG6DC-hjLpJA-Lv5iHZ-CieAaj-ifNeT2-fPpxJX-fPpxHX-fPoWGt-ifN6Y4-hjKPF5-NtSu36-LuWxgw-a8DDs8-yBSrM9-rckJEv-2h2koLM',
    },
    {
      id: 3,
      name: 'Бургомистр',
      species: 'Larus hyperboreus',
      description: 'Название, по всей видимости, объясняется склонностью этой птицы селиться вблизи птичьих базаров и регулярно «взимать дань» с их населения в виде яиц и птенцов. Бургомистр, как и большинство чаек, всеяден. В его рацион входят рыба, моллюски, падаль, морские звёзды, яйца и птенцы, мелкие млекопитающие, ягоды.',
      image: 'https://www.flickr.com/photos/141195791@N03/44170690831/in/photolist-2aidkv2-25sytX1-vzfvae-oQxpxJ-oQxoZi-oQxjQs-p82E16-p7L8pc-oQxhUo-oQxfuo-oQxfcQ-oQwmqe-p82FP6-oQxnrj-oQxcKq-p82BD2-p7Zsf3-oQx6rU-oQwvkt-p82rDx-p5ZomC-p7ZtYJ-p7Zz6C-FjpTXf-FPKtLb-dT68HS-GC7Lz4-oK6An1-eejecL-26yexTi-RAGP5a-3EdY8B-9Xd9Ky-RAGP2K-29gxhwm-SwTcQ6-7iJajd-Si46QG-9XahFt-7iHYNf-Bzut4t-FPKtW1-98LAAm-eemjMs-foQNmA-fqx6AF-fqMj9U-HKbriV-eehSab-a6mjVY',
    },
    {
      id: 4,
      name: 'Моря́нка',
      species: 'Clangula hyemalis',
      description: 'Морянка — шумная птица, особенно весной и в начале лета. Крик самца — громкое гортанное «а’ауллы», настолько характерное для этого вида, что местные жители называют морянку «аулейка» либо «авлик».',
      image: 'https://www.flickr.com/photos/cyberbirding/8630511663/in/photolist-2imhX4n-23sUTSE-AjFXW7-NJaSvB-e8EG3U-QChy85-BTcaBZ-e9DCre-2adYGA1-wt4nNH-28VdhXF-24DFU7c-JXN4E6-zpXmb3-2596pGN-AnYj3e-22rQN4q-kASraB-2596pBh-kASrg8-kAS34D-AmYTMt-kAUdgY-AmYWpc-A5tn2t-25cMrQg-wt4mJZ-ESrmrj-bnuMH2-7trCrV-vvHViZ-25cMrPz-25cMrJe-22rQNjq-2596pJm-25cMrKX-25cMrNx-22rQNcw-hns8Fi-22rQN8o-vvcWqU-hnqYxd-xFP82m-hnqYmb-hnr67J-hns8Xv',
    },
    {
      id: 5,
      name: 'Лю́рик',
      species: 'Alle alle',
      description: 'Люрики значительно страдают от загрязнения окружающей среды, в особенности от аварий нефтяных танкеров. Основными естественными врагами люриков являются большая полярная чайка (Larus hyperboreus) и песец (Alopex lagopus). Наблюдалось также, как яйца люриков поедали белые медведи (Ursus maritimus).',
      image: 'https://www.flickr.com/photos/119679149@N03/23188769926/in/photolist-Bk7vq3-X8f2fv-XHADD8-WWDkw1-VLR8vD-WgSv66-X4o8Lz-X45Jh4-WwYj7h-WM8emW-XfoAwE-X8iT6r-WUfpMY-VM84K1-Wf9pku-Xs1hQU-WWAcmj-Vh2Tr9-WTLJVJ-WbSYt2-nSLZYD-Wo8wxN-29kVzif-VN25ya-BW8RBb-2gi4tFv-CMWWKm-e6Defe-277tKah-Kr2Wsn-WFKph1-2hN3h9u-2ht5yBi-quj8Yb-YRj92y-2hLjaGu-2eaXYxj-2hCHiR4-Wo8BrA-xt1Hxc-GL2WZT-Wi1gzB-azKWWh-2dwM9MS-CH5nLD-2cxw3wv-DLxpeo-Rmurw8-azHguB-Zm6c5V',
    },
    {
      id: 6,
      name: 'Пуночка',
      species: 'Plectrophenax nivalis',
      description: 'Своё название пуночка получила от лапландского слова «пунак». Пуночка является популярным фольклорным персонажем у северных народов (чукчей, эскимосов и др). Летом пуночки питаются преимущественно насекомыми, зимой — исключительно семенами и зёрнами.',
      image: 'https://www.flickr.com/photos/92814828@N00/32978558064/in/photolist-SfcJmG-SfcJzY-TwJAqX-SVTv54-RTieHH-RQJN8m-RTieFt-SVTvmM-Sgb6AE-xdDzbQ-Km5SAG-ybmduV-29rEyrF-e2G9mu-xdMtct-q49dKo-q9ofk7-28Vdf6i-27xqSbf-hnrG5E-hnrF1L-29rECwV-E3mVf-29rEFSH-BnfSdh-26FX5ob-26FWZws-KL7f1c-vY58Lw-dXJewQ-dXJeuY-dXCxF4-dXCxGM-dXJesw-dXCxDB-owW1iH-xTaikZ-yve8Pv-6PjPMK-jwzb8Z-n8wbJi-SjJZTV-hnryrW-NjacFb-iHC8my-hdg4Ro-ShbKHh-oo2DBG-2hRLEry-2hRPabM',
    },
  ],
    [
      {
        id: 1,
        name: 'Борода́ч',
        species: 'Gypaetus barbatus',
        description: 'Бородач был впервые описан основоположником научной биологической систематики Карлом Линнеем в 1758 году в десятом издании его «Системы природы». Продолжительность жизни в неволе до 40 лет. Родители сбрасывают кости на соседние скалы, чтобы расколоть их, и затем по частям переносят в гнездо. Птенец находится в гнезде 106—130 дней.',
        image: 'https://www.flickr.com/photos/141875401@N08/48063295053/in/photolist-2gebX7V-2hps7Ab-2h5haf6-2g6Y6jQ-4gNJn-25p22rr-iFptMm-eEarJT-7XktgV-2dgjDVK-2Sj5iG-FZ3nnt-8JavRz-44t2Yb-S3dSMb-GhZVmr-pwJywC-crf8dJ-9t3a93-9PFcP-fgRQof-gJFZok-cSMS2A-fziSxu-gGo91w-2i6QfXB-2cLx1py-FuQ8tg-2as3Zeo-25npNRk-25Xa6vB-2c5s8Sj-9KmZHc-8Gunbq-dYSRMa-4Ljr8b-25Xa5ZX-25Xa6kM-oPR5hW-K1yRQg-F3BpC-2c5s8L7-2Qyuvt-hp9NQf-hp9SYY-HRwqvn-rpWnXh-iSLbn-LLUTLX-iSLbm',
      },
      {
        id: 2,
        name: 'Клуши́ца',
        species: 'Pyrrhocorax pyrrhocorax',
        description: 'Слово Pyrrhocorax, давшее название одновременно роду и виду, является комбинацией двух древнегреческих слов: πύρρος («огненно-красный») и κόραξ («ворон»).',
        image: 'https://www.flickr.com/photos/134719435@N07/48692657698/in/photolist-2hbNAH1-UHvnpM-q4WW6e-27YfEKo-2hrVcGx-28vepxq-2hmFzZg-2e5VjuT-2g24TPT-WXkvcj-Wqh5R5-2h8XgPU-SPzzFY-543CzM-V2bcW1-kSNt9D-WYjHpp-2gMZnfU-2gpqsgj-2gzynqX-LY8fV7-x8vty9-nEEvHq-2gXexUy-Jk8rfX-NbrbHQ-52zngR-GgwG13-2ggs5zb-28NCZTs-vB6Tr1-RMcryJ-2i7XT1o-256SAhB-TUVPTL-S69ecc-2hqWuWM-2gf4ZCx-KMNSr8-M5NzMe-CemsgM-2fkH5cg-2gLY6nL-21bgGf6-2hqWuTA-RAp3tZ-2exsM3K-TcB4Ec-2gKCoZk-22C7dUb',
      },
      {
        id: 3,
        name: 'Крапи́вник',
        species: 'Troglodytes troglodytes',
        description: 'Крапивник — одна из самых маленьких европейских птиц, его длина составляет всего 9—10,5 см, что почти вдвое меньше домового воробья. Изображение крапивника размещалось на английской монете в 1 фартинг с 1937 по 1956 годы.',
        image: 'https://www.flickr.com/photos/157014451@N04/49030604732/in/photolist-2hGEEA1-2hG8eRE-Toskno-QuK2FN-24WVvMR-2gdnUsa-2fs3ZK5-2fs446d-2hqtw1h-2hrzRC7-2hrBEQE-29RDAtU-29RDLgj-2hqrF1n-2beuuok-QuqpCE-2hrBEP7-2hquvzG-R9dSWU-2i3Mmmg-2hquvAP-2hn4HRd-2hqrF9o-2fBrnq1-Px3LZj-2eKSqN5-SkSjZd-28mwehc-24d6X4x-RBq3c3-GSxNfx-22Bp4k9-28H3u1z-2hzoJZz-2hzkVXV-2huoc9L-2cwzWaC-2cB3x1H-2bdfPHB-2i92qyB-UoahvE-22FfWjE-Buhgud-2hrCEGc-XsfYLB-kuQgkZ-2fnD5yq-XyjJrF-2hMoZWs-W5PXqH',
      },
      {
        id: 4,
        name: 'Гималайская завирушка',
        species: 'Prunella himalayana',
        description: 'Распространена в горах Центральной и Средней Азии. В России гнездится на юге Средней Сибири. Внешне напоминает альпийскую завирушку, отличаясь меньшими размерами, светлыми, а не рыжими пестринами на нижней части тела, ярко-белым пятном на горле. ',
        image: 'https://www.flickr.com/photos/130113460@N03/38798579162/in/photolist-227uRS3-2gihkLD-2erLoRj-2hcvQ7i-23Fyif6-2hWm51r-22K48Hz-24BVQz1-2i4VFiB-6PLhmT-2dyisES-2fm47rC-275KLck-29WSYLJ-25z91e1-2dngtdf-2gd8daH-uuxS7J-JSPeHG-23B78sf-2aFWVkz-2bkG5Fa-2dxK7Jv-2cQEqTL-28uz34v-9aHhKc-25bB1P4-Ydi7PZ-oymHbR-vwVzfm-2bCNrKa-2aQ8f4Z-28n4wHL-29duiNE-ijLUWe-L5t88e-b4CFW6-9YfgFP-2c1XiKx-9YfgDD-K8GuW8-oy3hvU-aybVMR-aybVEF-jV8dVB-eK9Hqs-aybVTB-28zR6mh-5ee51E-2aBsFMQ',
      },
      {
        id: 5,
        name: 'Грифы',
        species: 'Gyps',
        description: 'Типичные падальщики, выделяются преимущественно тёмным оперением, неоперённой головой (многие — неоперённой шеей) и длинными и широкими крыльями. Обладают мощным клювом, но слабыми ногами, неспособными переносить добычу. Характерная анатомическая особенность — большого объёма зоб и желудок для потребления больших количеств пищи. Грифами также называют виды птиц некоторых других родов подсемейства грифовые, а также американских грифов. ',
        image: 'https://www.flickr.com/photos/140507227@N08/48961480578/in/photolist-2hAyoof-2hJSLWH-2f1vbDU-2i2uVh5-2hYTawi-2ifgak2-87gGqa-ua3Vn4-KkMvUQ-2gF3JJY-26wnXcQ-A4LTdS-4qqMve-g5PU4M-73idUM-j5WBYR-4snru9-g5Q5vj-BaUBp4-HVXNdJ-AwWpWK-577Afi-AwWfrT-J6h7iv-27ir3Xd-215sRYP-2c7Qnq5-5MzK2L-8iJN5c-VgbzRg-oLA9h9-2eN741f-A4KBaJ-A4RoCr-Aj4HGN-zpkady-zptace-zpt3Pe-AbohV-nuPLo2-4vYRof-onuFZL-e8pFy5-k9PTKp-2gHLUfR-MxwUeM-2gjiCne-23UZk9j-QqtSfW-28AzYdm',
      },
      {
        id: 6,
        name: 'Белая трясогузка',
        species: 'Motacilla alba',
        description: 'Национальный символ Латвии. Длина тела белой трясогузки составляет 16—19 см и для неё характерен длинный хвост. Окраска верхней части тела преимущественно серая, а нижней — белая. Головка также белая, с чёрным горлом и шапочкой. Масса трясогузки всего 20—23 г. Получила своё название из-за характерных движений хвостом.',
        image: '',
      },
    ],
    [
      {
        id: 1,
        name: 'Ку́рица',
        species: 'Gallus gallus',
        description: ' самая многочисленная и распространённая домашняя птица, которая является одомашненной формой банкивской джунглевой курицы. Летает плохо, недалеко. За длительную историю одомашнивания человеком выведено большое количество разнообразных пород кур. Куры принадлежат к числу наиболее полезных и выдающихся по своей продуктивности домашних птиц. Разводят их ради мяса и яиц, кроме того, от них получают перо и пух.',
        image: '',
      },
      {
        id: 2,
        name: 'Немо́й пе́репел',
        species: 'Coturnix japonica',
        description: 'Одомашнен человеком и разводится ради мяса и яиц; используется также как модельный организм в научно-исследовательских (лабораторных) целях.',
        image: '',
      },
      {
        id: 3,
        name: 'Дома́шняя инде́йка',
        species: 'Meleagris gallopavo',
        description: 'Доместикация (одомашнивание) дикой индейки проходила в Новом Свете, где коренные жители одомашнили дикую индейку задолго до открытия Америки европейцами. В 1519 году индеек завезли в Испанию (отсюда ещё одно, устаревшее, название — «испа́нские ку́ры»), а через 5 лет они распространились во Франции, Англии и по всей Европе. Другое раннее название индейки — «туре́цкие ку́ры», которое закрепилось за птицей в английском языке («turkey»).',
        image: '',
      },
      {
        id: 4,
        name: 'Дома́шняя у́тка',
        species: 'Anas platyrhynchos',
        description: 'Разводимая человеком водоплавающая птица, один из многочисленных и распространённых видов домашней птицы. Летает плохо, недалеко. Ведёт своё начало от обыкновенной дикой утки, или кряквы.',
        image: '',
      },
      {
        id: 5,
        name: 'Голубь',
        species: 'Columba livia',
        description: 'Широко распространённая птица семейства голубиных, родиной которой считаются Южная Европа, Юго-Западная Азия и Северная Африка. Ещё в глубокой древности эти птицы были приручены человеком, в результате были выведены так называемые домашние голуби (Columba livia var. domestica).',
        image: '',
      },
      {
        id: 6,
        name: 'Африка́нский стра́ус',
        species: 'Struthio camelus',
        description: 'Его научное название в переводе с греческого означает «воробей-верблюд» (греч. στρουθίο-κάμηλος). Страус — полигамная птица. Чаще всего страусов можно встретить группами по 3—5 птиц — один самец и несколько самок.',
        image: '',
      },
    ]],
  'category': ['Дальний север', 'Высокие горы', 'Мои домашние', 'Элвис', 'Никии', 'Vjf'],
'score':0,

};


export default store;
