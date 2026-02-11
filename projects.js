// All projects data extracted from the portfolio
const projects = [
    {
        title: "EL ETERNAUTA",
        director: "Bruno Stagnaro",
        year: 2025,
        platform: "Netflix",
        type: "Serie",
        image: "images/ES-AR_EE_Main-Key-Art_The-Mask_Vertical_27x40_sRGB_PRE_OP2.jpg"
    },
    {
        title: "EL FUTURO ES NUESTRO",
        director: "Vicente Amorim, Jesús Braceras y Daniel Rezende",
        year: "TBA",
        platform: "Netflix",
        type: "Serie",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=EL+FUTURO+ES+NUESTRO"
    },
    {
        title: "MIS MUERTOS TRISTES",
        director: "Pablo Larraín",
        year: "TBA",
        platform: "Netflix",
        type: "Serie",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=MIS+MUERTOS+TRISTES"
    },
    {
        title: "YO, NARCISO",
        director: "Adrián Suar",
        year: "TBA",
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=YO+NARCISO"
    },
    {
        title: "LA DESCONOCIDA",
        director: "Gabe Ibáñez",
        year: "TBA",
        platform: "Netflix",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=LA+DESCONOCIDA"
    },
    {
        title: "FELICIDADES",
        director: "Álex de la Iglesia",
        year: "TBA",
        platform: "Netflix",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=FELICIDADES"
    },
    {
        title: "PORNO Y HELADO",
        director: "Martín Piroyansky",
        year: "T1 (2022), T2 (2024) y T3 (TBA)",
        platform: "Prime Video",
        type: "Serie",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=PORNO+Y+HELADO"
    },
    {
        title: "DIVISIÓN PALERMO",
        director: "Santiago Korovsky",
        year: "T1 (2023) y T2 (2025)",
        platform: "Netflix",
        type: "Serie",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=DIVISION+PALERMO"
    },
    {
        title: "MAZEL TOV",
        director: "Adrián Suar",
        year: 2025,
        platform: "Disney+",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=MAZEL+TOV"
    },
    {
        title: "EL BESO DE LA MUJER ARAÑA",
        director: "Bill Condon",
        year: 2025,
        platform: "Consultoría",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=EL+BESO+DE+LA+MUJER+ARANA"
    },
    {
        title: "ROCCO SCHIAVONE",
        director: "Simone Spada",
        year: "T6 (2025)",
        platform: "(Casting Argentina)",
        type: "Serie",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=ROCCO+SCHIAVONE"
    },
    {
        title: "VENCER O MORIR",
        director: "Rodrigo Sepúlveda y Gabriel Díaz",
        year: 2024,
        platform: "Prime Video (Casting Argentina)",
        type: "Serie",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=VENCER+O+MORIR"
    },
    {
        title: "MÁXIMA",
        director: "Saskia Diesing",
        year: "T1 (2024), T2 (TBA) y T3 (TBA)",
        platform: "HBO",
        type: "Serie",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=MAXIMA"
    },
    {
        title: "DESCANSAR EN PAZ",
        director: "Sebastián Borensztein",
        year: 2024,
        platform: "Netflix",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=DESCANSAR+EN+PAZ"
    },
    {
        title: "JAQUE MATE",
        director: "Jorge Nisco",
        year: 2024,
        platform: "Prime Video",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=JAQUE+MATE"
    },
    {
        title: "LINDA",
        director: "Mariana Wainstein",
        year: 2024,
        platform: "Disney+",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=LINDA"
    },
    {
        title: "LAS HERMANAS FANTÁSTICAS",
        director: "Fabiana Tiscornia",
        year: 2024,
        platform: "Netflix",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=LAS+HERMANAS+FANTASTICAS"
    },
    {
        title: "TERAPIA ALTERNATIVA",
        director: "Ana Katz",
        year: "T2 (2024)",
        platform: "Disney+",
        type: "Serie",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=TERAPIA+ALTERNATIVA"
    },
    {
        title: "EL REINO",
        director: "Marcelo Piñeyro y Miguel Cohan",
        year: "T1 (2021) y T2 (2023)",
        platform: "Netflix",
        type: "Serie",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=EL+REINO"
    },
    {
        title: "EL AMOR DESPUÉS DEL AMOR",
        director: "Gonzalo Tobal",
        year: 2023,
        platform: "Netflix",
        type: "Serie",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=EL+AMOR+DESPUES+DEL+AMOR"
    },
    {
        title: "WHILE YOU WERE BREEDING",
        director: "Wendey Stanzler y Diego Velasco",
        year: 2023,
        platform: "Hulu",
        type: "Serie",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=WHILE+YOU+WERE+BREEDING"
    },
    {
        title: "LA SOCIEDAD DE LA NIEVE",
        director: "Juan Antonio Bayona",
        year: 2023,
        platform: "Netflix",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=LA+SOCIEDAD+DE+LA+NIEVE"
    },
    {
        title: "MOSCAS",
        director: "Aritz Moreno",
        year: 2023,
        platform: "Vix",
        type: "Serie",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=MOSCAS"
    },
    {
        title: "CRÓNICAS DE UNA SANTA ERRANTE",
        director: "Tomás Gómez Bustillo",
        year: 2023,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=CRONICAS+DE+UNA+SANTA+ERRANTE"
    },
    {
        title: "NAUFRAGIOS",
        director: "Vanina Spataro",
        year: 2023,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=NAUFRAGIOS"
    },
    {
        title: "MARTINA CHAPANAY",
        director: "Miguel Ángel Rocca",
        year: 2023,
        platform: "Canal Encuentro",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=MARTINA+CHAPANAY"
    },
    {
        title: "EL FIN DEL AMOR",
        director: "Daniel Barone, Leticia Dolera y Constanza Novick",
        year: "T1 (2022)",
        platform: "Prime Video",
        type: "Serie",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=EL+FIN+DEL+AMOR"
    },
    {
        title: "30 NOCHES CON MI EX",
        director: "Adrián Suar",
        year: 2022,
        platform: "Disney+",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=30+NOCHES+CON+MI+EX"
    },
    {
        title: "SUPERNOVA",
        director: "Ana Katz",
        year: 2022,
        platform: "Prime Video",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=SUPERNOVA"
    },
    {
        title: "LEGÍTIMA DEFENSA",
        director: "Andrea Braga",
        year: 2022,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=LEGITIMA+DEFENSA"
    },
    {
        title: "EL CASO MONROY",
        director: "Josué Méndez",
        year: 2022,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=EL+CASO+MONROY"
    },
    {
        title: "ADIÓS BUENOS AIRES",
        director: "Germán Kral",
        year: 2022,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=ADIOS+BUENOS+AIRES"
    },
    {
        title: "WEST SIDE STORY",
        director: "Steven Spielberg",
        year: 2021,
        platform: "(Casting Argentina)",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=WEST+SIDE+STORY"
    },
    {
        title: "LA CHICA NUEVA",
        director: "Micaela Gonzalo",
        year: 2021,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=LA+CHICA+NUEVA"
    },
    {
        title: "EL PRÓFUGO",
        director: "Natalia Meta",
        year: 2020,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=EL+PROFUGO"
    },
    {
        title: "CASI FELIZ",
        director: "Hernán Guerschuny",
        year: "T1 (2020)",
        platform: "Netflix",
        type: "Serie",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=CASI+FELIZ"
    },
    {
        title: "LA ODISEA DE LOS GILES",
        director: "Sebastián Borensztein",
        year: 2019,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=LA+ODISEA+DE+LOS+GILES"
    },
    {
        title: "EL AMOR ES MÁS FÁCIL",
        director: "Daniel Pensa",
        year: 2020,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=EL+AMOR+ES+MAS+FACIL"
    },
    {
        title: "ARDE MADRID",
        director: "Paco León",
        year: 2018,
        platform: "(Casting Argentina) Movistar+",
        type: "Serie",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=ARDE+MADRID"
    },
    {
        title: "LOS MIEMBROS DE LA FAMILIA",
        director: "Mateo Bendesky",
        year: 2019,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=LOS+MIEMBROS+DE+LA+FAMILIA"
    },
    {
        title: "OPERACIÓN FINAL",
        director: "Chris Weitz",
        year: 2018,
        platform: "(Casting Argentina) Netflix",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=OPERACION+FINAL"
    },
    {
        title: "PORNO PARA PRINCIPIANTES",
        director: "Carlos Ameglio",
        year: 2018,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=PORNO+PARA+PRINCIPIANTES"
    },
    {
        title: "EL ÁNGEL",
        director: "Luis Ortega",
        year: 2018,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=EL+ANGEL"
    },
    {
        title: "PSICONAUTAS",
        director: "Carlos Ameglio",
        year: "T1(2016) y T2 (2018)",
        platform: "",
        type: "Serie",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=PSICONAUTAS"
    },
    {
        title: "AHÍ AFUERA",
        director: "Nicolás Pérez",
        year: 2017,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=AHI+AFUERA"
    },
    {
        title: "UNA NOCHE DE AMOR",
        director: "Hernán Guerschuny",
        year: 2016,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=UNA+NOCHE+DE+AMOR"
    },
    {
        title: "2001: MIENTRAS KUBRICK ESTABA EN EL ESPACIO",
        director: "Gabriel Nicoli",
        year: 2016,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=2001+MIENTRAS+KUBRICK"
    },
    {
        title: "MALDITO SEAS WATERFALL",
        director: "Alejandro Chomski",
        year: 2016,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=MALDITO+SEAS+WATERFALL"
    },
    {
        title: "PRINCESITA",
        director: "Marialy Rivas",
        year: 2016,
        platform: "(Casting Argentina)",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=PRINCESITA"
    },
    {
        title: "EL CIUDADANO ILUSTRE",
        director: "Gastón Duprat y Mariano Cohn",
        year: 2016,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=EL+CIUDADANO+ILUSTRE"
    },
    {
        title: "EL HIPNOTIZADOR",
        director: "Alex Gabasi",
        year: "T1 (2015)",
        platform: "(Casting Argentina)",
        type: "Serie",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=EL+HIPNOTIZADOR"
    },
    {
        title: "VOLEY",
        director: "Martín Piroyansky",
        year: 2015,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=VOLEY"
    },
    {
        title: "FOCUS",
        director: "Glenn Ficarra",
        year: 2015,
        platform: "(Casting Argentina)",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=FOCUS"
    },
    {
        title: "EN LAS NUBES",
        director: "Marcelo Mitnik",
        year: 2014,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=EN+LAS+NUBES"
    },
    {
        title: "TIEMPO LIBRE",
        director: "Martín Piroyansky",
        year: 2014,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=TIEMPO+LIBRE"
    },
    {
        title: "BIEN DE FAMILIA",
        director: "Jorge Gaggero",
        year: 2014,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=BIEN+DE+FAMILIA"
    },
    {
        title: "DOS DISPAROS",
        director: "Martín Rejtman",
        year: 2014,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=DOS+DISPAROS"
    },
    {
        title: "RELATOS SALVAJES",
        director: "Damián Szifron",
        year: 2014,
        platform: "(Asistencia de casting)",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=RELATOS+SALVAJES"
    },
    {
        title: "SÉPTIMO",
        director: "Patxi Amezcua",
        year: 2013,
        platform: "(Asistencia de casting)",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=SEPTIMO"
    },
    {
        title: "LA PELEA DE MI VIDA",
        director: "Jorge Nisco",
        year: 2012,
        platform: "",
        type: "Película",
        image: "https://via.placeholder.com/400x600/000000/D4AF37?text=LA+PELEA+DE+MI+VIDA"
    }
];
