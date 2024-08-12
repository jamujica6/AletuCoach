import Image from 'next/image';
import isologo from '../public/images/logo.png'

const services = [
  {
    title: "COACHING PERSONAL: SESIONES INDIVIDUALES ON-LINE/PRESENCIAL V REGIÓN, CHILE",
    description: "Programas de cambio y transformación, sesión mentoría, terapia floral.",
    imageSrc: "/images/alealas.jpg",
  },
  {
    title: "EXPERIENCIAS GRUPALES",
    description: "Clases de yoga, tantra, entrenamiento mindfulness, clases de meditación",
    imageSrc: "/images/wonder8.jpg",
  },
  {
    title: "CHARLAS EVENTOS: PUEDO LLEVAR UNA CHARLA EXPERIECIAL DONDE TÚ NECESITES",
    description: "He participado en diferentes eventos como: Wanderlust, Biofest, Manada, Master Coaching Academy, Salon Pyme Chile, Bpraxis, Tricot",
    imageSrc: "/images/wonder33.jpg",
  },
  {
    title: "COACHING EMPRESAS Y COLEGIOS",
    description: "",
    imageSrc: "/images/mindfullpractice.jpg",
  },
  {
    title: "EXPERIENCIAS LABORALES QUE VUELVEN TU EQUIPO UNIDO Y CONECTADO.",
    description: "",
    imageSrc: "/images/hero-image-01.jpg",
  },
  {
    title: "EDUCACIÓN CON MÁS HERRAMIENTAS SOCIOEMOCIONALES Y DE COMUNICACIÓN",
    description: "",
    imageSrc: "/images/wonder7.jpg",
  },
];



export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-beige-200 font-bellezaRegular">CAMBIO, SANACIÓN Y TRANSFORMACIÓN PERSONAL</h2>
            <p className="text-xl text-gray-900 font-nowLight 00">Tus pensamientos generan emociones.</p>
            <p className="text-xl text-gray-900 font-nowLight 00">Tus emociones producen cambios fisiológicos</p>
            <p className="text-xl text-gray-900 font-nowLight 00">Estas emociones mantenidas en el tiempo se convierten en estados emocionales que impactan directamente en tu Salud y Bienestar.</p>
            <Image
            src={isologo}
            alt="Isologotipo"
            width={350}
            height={200}
            />
          </div>
          <div>
                    </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-1 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">

            <h2 className="h2 mb-4 text-beige-200 font-bellezaRegular">UN POCO DE MI</h2>

           
            <p className="text-xxl text-purple-600 font-nowLight 00 text-center">Me llamo Alejandra Ortiz. Soy Coach profesional, especializada en PNL, Psicología Positiva y Mindfulness.</p>
            <p className="text-xxl text-purple-600 font-nowLight 00 text-center">Soy instructora de yoga con formación en Chile y en India. </p>
           
            <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-1 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            <p className="text-xxl text-beige-100 font-nowLight 00 text-center">Hace 18 años a acompaño de manera profesional, procesos de Cambio, Sanación y Transformación a través de diferentes  herramientas. </p>
            <div className="max-w-sm mx-auto grid gap-0 md:grid-cols-1 lg:grid-cols-1 lg:gap-0 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            <p className="text-xxl text-purple-600 font-bellezaRegular 00 text-center" style={{ marginBottom: '7px' }}>PSICOLOGÍA POSITIVA</p>
            <p className="text-xxl text-purple-600 font-bellezaRegular 00 text-center" style={{ marginBottom: '7px' }}>YOGA </p>
            <p className="text-xxl text-purple-600 font-bellezaRegular 00 text-center" style={{ marginBottom: '7px' }}> MINDFULNESS</p>
            <p className="text-xxl text-purple-600 font-bellezaRegular 00 text-center" style={{ marginBottom: '7px' }}>PNL</p>
             </div>
            
           </div>
             <Image
            src={isologo}
            alt="Isologotipo"
            width={350}
            height={200}
            />



<h2 className="h2 mb-4 text-beige-200 font-bellezaRegular text-center">¿COMO TE PUEDO AYUDAR?</h2>

            <p className="text-xl text-gray-900 font-nowLight 00 text-center">A través de sesiones individuales, experiencias grupales,  charlas, cursos y retiros.</p>
            <p className="text-xl text-gray-900 font-nowLight 00 text-center">Te acompaño de manera profesional, confidencial y amorosa en tu proceso de Cambio, Sanación y Transformación.</p>
            <p className="text-xl text-gray-900 font-nowLight 00 text-center">Transitemos junt@s el camino de Consciencia, Amor y Libertad Personal.</p>

           
             <Image
            src={isologo}
            alt="Isologotipo"
            width={350}
            height={200}
            />

 <h2 className="h2 mb-4 text-beige-200 font-bellezaRegular" style={{ marginBottom: '2px' }}>¿TIENES UN OBJETIVO?</h2>
<h2 className="h2 mb-4 text-beige-200 font-bellezaRegular" style={{ marginTop: '2px' }}>¡VAMOS POR ELLO!</h2>
     
            <p className="text-xl text-gray-900 font-nowLight 00 text-center">Mi formación como Coach me dio excelentes herramientas para convertir tu sueño en una meta.
            Y esto ¡me APASIONA! </p>
            <p className="text-xl text-gray-900 font-nowLight 00 text-center">Vamos a CONCRETAR eso que tanto quieres para tu vida.</p>
            <p className="text-xl text-gray-900 font-nowLight 00 text-center">Sea lo que sea... Si para ti es importante, entonces le daremos FORMA, le pondremos FOCO, acelerador, amor, entusiasmo, consciencia y ACCIÓN. </p>

            <Image
            src={isologo}
            alt="Isologotipo"
            width={350}
            height={200}
            />


  

            {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
  <path
    className="stroke-current text-purple-100"
    d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
    strokeLinecap="square"
    strokeWidth="2"
    fill="none"
    fillRule="evenodd"
  />
  <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
</svg> */}


              {/* <h4 className="h4 mb-2 text-gray-800 font-bellezaRegular">El Amor</h4>
              <p className="text-lg text-gray-950 text-center font-nowLight">El amor nos recuerda nuestro origen y nuestro destino. No existe energía más poderosa y alquímica que el AMOR. El amor es esa energía perfecta manifestada de diferentes formas. ♥️</p> */}
            </div>

            {/* 2nd item */}
            {/* <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3" />
                </g>
              </svg>
              <h4 className="h4 mb-2 text-gray-800 font-bellezaRegular">Mindfulness</h4>
              <p className="text-lg text-gray-950 text-center font-nowLight">A veces practicar meditación es un acto desagdable o incómodo, porque tenemos nuestra mente con demasiado ruido mental. Lo más bello de esto, es que una vez que aprendes a sostener ese ruido y a lidiar con esos monos locos que tenemos en la cabeza. Todo empieza a equilibrarse. Comienzan a desaparecer nuestras corazas que hemos creado para aliviar el dolor y florece nuestra verdad.</p>
            </div> */}

            {/* 3rd item */}
            {/* <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                  <path className="stroke-current text-purple-300" d="M22 30h4v12h-4z" />
                </g>
              </svg>
              <h4 className="h4 mb-2 text-gray-800 font-bellezaRegular">Relaciones Sanas</h4>
              <p className="text-lg text-gray-950 font-nowLight text-center">Las relaciones sanas elevan tu frecuencia, sacan lo mejor de ti, te hacen sentir en paz, te potencian, te respetan y te hacen sentir bien</p>
            </div> */}

         

          </div>

        </div>
      </div>

      <div className="container mx-auto my-12 px-4">
       <h2 className="h2 mb-4 text-beige-200 font-bellezaRegular text-center">SERVICIOS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={service.imageSrc}
              alt={service.title}
              width={350}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </section>

    
  )
}
