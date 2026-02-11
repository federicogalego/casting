// All projects data with real images
const projects = [
    {
        title: "EL ETERNAUTA",
        director: "Bruno Stagnaro",
        year: 2025,
        platform: "Netflix",
        type: "Serie",
        image: "images/el-eternauta.jpg"
    },
    {
        title: "EL FUTURO ES NUESTRO",
        director: "Vicente Amorim, Jesús Braceras y Daniel Rezende",
        year: "TBA",
        platform: "Netflix",
        type: "Serie",
        image: "images/el-futuro-es-nuestro.jpg"
    },
    {
        title: "MIS MUERTOS TRISTES",
        director: "Pablo Larraín",
        year: "TBA",
        platform: "Netflix",
        type: "Serie",
        image: "images/mis-muertos-tristes.jpg"
    },
    {
        title: "YO, NARCISO",
        director: "Adrián Suar",
        year: "TBA",
        platform: "",
        type: "Película",
        image: "images/yo-narciso.jpg"
    },
    {
        title: "LA DESCONOCIDA",
        director: "Gabe Ibáñez",
        year: "TBA",
        platform: "Netflix",
        type: "Película",
        image: "images/la-desconocida.jpg"
    },
    {
        title: "FELICIDADES",
        director: "Álex de la Iglesia",
        year: "TBA",
        platform: "Netflix",
        type: "Película",
        image: "images/felicidades.jpg"
    },
    {
        title: "PORNO Y HELADO",
        director: "Martín Piroyansky",
        year: "T1 (2022), T2 (2024) y T3 (TBA)",
        platform: "Prime Video",
        type: "Serie",
        image: "images/porno-y-helado.jpg"
    },
    {
        title: "DIVISIÓN PALERMO",
        director: "Santiago Korovsky",
        year: "T1 (2023) y T2 (2025)",
        platform: "Netflix",
        type: "Serie",
        image: "images/division-palermo.jpg"
    },
    {
        title: "MAZEL TOV",
        director: "Adrián Suar",
        year: 2025,
        platform: "Disney+",
        type: "Película",
        image: "images/mazel-tov.jpg"
    },
    {
        title: "EL BESO DE LA MUJER ARAÑA",
        director: "Bill Condon",
        year: 2025,
        platform: "Consultoría",
        type: "Película",
        image: "images/el-beso-mujer-arana.jpg"
    },
    {
        title: "ROCCO SCHIAVONE",
        director: "Simone Spada",
        year: "T6 (2025)",
        platform: "(Casting Argentina)",
        type: "Serie",
        image: "images/rocco-schiavone.jpg"
    },
    {
        title: "VENCER O MORIR",
        director: "Rodrigo Sepúlveda y Gabriel Díaz",
        year: 2024,
        platform: "Prime Video (Casting Argentina)",
        type: "Serie",
        image: "images/vencer-o-morir.jpg"
    },
    {
        title: "MÁXIMA",
        director: "Saskia Diesing",
        year: "T1 (2024), T2 (TBA) y T3 (TBA)",
        platform: "HBO",
        type: "Serie",
        image: "images/maxima.jpg"
    },
    {
        title: "DESCANSAR EN PAZ",
        director: "Sebastián Borensztein",
        year: 2024,
        platform: "Netflix",
        type: "Película",
        image: "images/descansar-en-paz.jpg"
    },
    {
        title: "JAQUE MATE",
        director: "Jorge Nisco",
        year: 2024,
        platform: "Prime Video",
        type: "Película",
        image: "images/jaque-mate.jpg"
    },
    {
        title: "LINDA",
        director: "Mariana Wainstein",
        year: 2024,
        platform: "Disney+",
        type: "Película",
        image: "images/linda.jpg"
    },
    {
        title: "LAS HERMANAS FANTÁSTICAS",
        director: "Fabiana Tiscornia",
        year: 2024,
        platform: "Netflix",
        type: "Película",
        image: "images/las-hermanas-fantasticas.jpg"
    },
    {
        title: "TERAPIA ALTERNATIVA",
        director: "Ana Katz",
        year: "T2 (2024)",
        platform: "Disney+",
        type: "Serie",
        image: "images/terapia-alternativa.jpg"
    },
    {
        title: "EL REINO",
        director: "Marcelo Piñeyro y Miguel Cohan",
        year: "T1 (2021) y T2 (2023)",
        platform: "Netflix",
        type: "Serie",
        image: "images/el-reino.jpg"
    },
    {
        title: "EL AMOR DESPUÉS DEL AMOR",
        director: "Gonzalo Tobal",
        year: 2023,
        platform: "Netflix",
        type: "Serie",
        image: "images/el-amor-despues-del-amor.jpg"
    },
    {
        title: "WHILE YOU WERE BREEDING",
        director: "Wendey Stanzler y Diego Velasco",
        year: 2023,
        platform: "Hulu",
        type: "Serie",
        image: "images/while-you-were-breeding.jpg"
    },
    {
        title: "LA SOCIEDAD DE LA NIEVE",
        director: "Juan Antonio Bayona",
        year: 2023,
        platform: "Netflix",
        type: "Película",
        image: "images/la-sociedad-de-la-nieve.jpg"
    },
    {
        title: "MOSCAS",
        director: "Aritz Moreno",
        year: 2023,
        platform: "Vix",
        type: "Serie",
        image: "images/moscas.jpg"
    },
    {
        title: "CRÓNICAS DE UNA SANTA ERRANTE",
        director: "Tomás Gómez Bustillo",
        year: 2023,
        platform: "",
        type: "Película",
        image: "images/cronicas-santa-errante.jpg"
    },
    {
        title: "NAUFRAGIOS",
        director: "Vanina Spataro",
        year: 2023,
        platform: "",
        type: "Película",
        image: "images/naufragios.jpg"
    },
    {
        title: "MARTINA CHAPANAY",
        director: "Miguel Ángel Rocca",
        year: 2023,
        platform: "Canal Encuentro",
        type: "Película",
        image: "images/martina-chapanay.jpg"
    },
    {
        title: "EL FIN DEL AMOR",
        director: "Daniel Barone, Leticia Dolera y Constanza Novick",
        year: "T1 (2022)",
        platform: "Prime Video",
        type: "Serie",
        image: "images/el-fin-del-amor.jpg"
    },
    {
        title: "30 NOCHES CON MI EX",
        director: "Adrián Suar",
        year: 2022,
        platform: "Disney+",
        type: "Película",
        image: "images/30-noches-con-mi-ex.jpg"
    },
    {
        title: "SUPERNOVA",
        director: "Ana Katz",
        year: 2022,
        platform: "Prime Video",
        type: "Película",
        image: "images/supernova.jpg"
    },
    {
        title: "LEGÍTIMA DEFENSA",
        director: "Andrea Braga",
        year: 2022,
        platform: "",
        type: "Película",
        image: "images/legitima-defensa.jpg"
    },
    {
        title: "EL CASO MONROY",
        director: "Josué Méndez",
        year: 2022,
        platform: "",
        type: "Película",
        image: "images/el-caso-monroy.jpg"
    },
    {
        title: "ADIÓS BUENOS AIRES",
        director: "Germán Kral",
        year: 2022,
        platform: "",
        type: "Película",
        image: "images/adios-buenos-aires.jpg"
    },
    {
        title: "WEST SIDE STORY",
        director: "Steven Spielberg",
        year: 2021,
        platform: "(Casting Argentina)",
        type: "Película",
        image: "images/west-side-story.jpg"
    },
    {
        title: "LA CHICA NUEVA",
        director: "Micaela Gonzalo",
        year: 2021,
        platform: "",
        type: "Película",
        image: "images/la-chica-nueva.jpg"
    },
    {
        title: "EL PRÓFUGO",
        director: "Natalia Meta",
        year: 2020,
        platform: "",
        type: "Película",
        image: "images/el-profugo.jpg"
    },
    {
        title: "CASI FELIZ",
        director: "Hernán Guerschuny",
        year: "T1 (2020)",
        platform: "Netflix",
        type: "Serie",
        image: "images/casi-feliz.jpg"
    },
    {
        title: "LA ODISEA DE LOS GILES",
        director: "Sebastián Borensztein",
        year: 2019,
        platform: "",
        type: "Película",
        image: "images/la-odisea-de-los-giles.jpg"
    },
    {
        title: "EL AMOR ES MÁS FÁCIL",
        director: "Daniel Pensa",
        year: 2020,
        platform: "",
        type: "Película",
        image: "images/el-amor-es-mas-facil.jpg"
    },
    {
        title: "ARDE MADRID",
        director: "Paco León",
        year: 2018,
        platform: "(Casting Argentina) Movistar+",
        type: "Serie",
        image: "images/arde-madrid.jpg"
    },
    {
        title: "LOS MIEMBROS DE LA FAMILIA",
        director: "Mateo Bendesky",
        year: 2019,
        platform: "",
        type: "Película",
        image: "images/los-miembros-de-la-familia.jpg"
    },
    {
        title: "OPERACIÓN FINAL",
        director: "Chris Weitz",
        year: 2018,
        platform: "(Casting Argentina) Netflix",
        type: "Película",
        image: "images/operacion-final.jpg"
    },
    {
        title: "PORNO PARA PRINCIPIANTES",
        director: "Carlos Ameglio",
        year: 2018,
        platform: "",
        type: "Película",
        image: "images/porno-para-principiantes.jpg"
    },
    {
        title: "EL ÁNGEL",
        director: "Luis Ortega",
        year: 2018,
        platform: "",
        type: "Película",
        image: "images/el-angel.jpg"
    },
    {
        title: "PSICONAUTAS",
        director: "Carlos Ameglio",
        year: "T1(2016) y T2 (2018)",
        platform: "",
        type: "Serie",
        image: "images/psiconautas.jpg"
    },
    {
        title: "AHÍ AFUERA",
        director: "Nicolás Pérez",
        year: 2017,
        platform: "",
        type: "Película",
        image: "images/ahi-afuera.jpg"
    },
    {
        title: "UNA NOCHE DE AMOR",
        director: "Hernán Guerschuny",
        year: 2016,
        platform: "",
        type: "Película",
        image: "images/una-noche-de-amor.jpg"
    },
    {
        title: "2001: MIENTRAS KUBRICK ESTABA EN EL ESPACIO",
        director: "Gabriel Nicoli",
        year: 2016,
        platform: "",
        type: "Película",
        image: "images/2001-kubrick.jpg"
    },
    {
        title: "MALDITO SEAS WATERFALL",
        director: "Alejandro Chomski",
        year: 2016,
        platform: "",
        type: "Película",
        image: "images/maldito-seas-waterfall.jpg"
    },
    {
        title: "PRINCESITA",
        director: "Marialy Rivas",
        year: 2016,
        platform: "(Casting Argentina)",
        type: "Película",
        image: "images/princesita.jpg"
    },
    {
        title: "EL CIUDADANO ILUSTRE",
        director: "Gastón Duprat y Mariano Cohn",
        year: 2016,
        platform: "",
        type: "Película",
        image: "images/el-ciudadano-ilustre.jpg"
    },
    {
        title: "EL HIPNOTIZADOR",
        director: "Alex Gabasi",
        year: "T1 (2015)",
        platform: "(Casting Argentina)",
        type: "Serie",
        image: "images/el-hipnotizador.jpg"
    },
    {
        title: "VOLEY",
        director: "Martín Piroyansky",
        year: 2015,
        platform: "",
        type: "Película",
        image: "images/voley.jpg"
    },
    {
        title: "FOCUS",
        director: "Glenn Ficarra",
        year: 2015,
        platform: "(Casting Argentina)",
        type: "Película",
        image: "images/focus.jpg"
    },
    {
        title: "EN LAS NUBES",
        director: "Marcelo Mitnik",
        year: 2014,
        platform: "",
        type: "Película",
        image: "images/en-las-nubes.jpg"
    },
    {
        title: "TIEMPO LIBRE",
        director: "Martín Piroyansky",
        year: 2014,
        platform: "",
        type: "Película",
        image: "images/tiempo-libre.jpg"
    },
    {
        title: "BIEN DE FAMILIA",
        director: "Jorge Gaggero",
        year: 2014,
        platform: "",
        type: "Película",
        image: "images/bien-de-familia.jpg"
    },
    {
        title: "DOS DISPAROS",
        director: "Martín Rejtman",
        year: 2014,
        platform: "",
        type: "Película",
        image: "images/dos-disparos.jpg"
    },
    {
        title: "RELATOS SALVAJES",
        director: "Damián Szifron",
        year: 2014,
        platform: "(Asistencia de casting)",
        type: "Película",
        image: "images/relatos-salvajes.jpg"
    },
    {
        title: "SÉPTIMO",
        director: "Patxi Amezcua",
        year: 2013,
        platform: "(Asistencia de casting)",
        type: "Película",
        image: "images/septimo.jpg"
    },
    {
        title: "LA PELEA DE MI VIDA",
        director: "Jorge Nisco",
        year: 2012,
        platform: "",
        type: "Película",
        image: "images/la-pelea-de-mi-vida.jpg"
    }
];
