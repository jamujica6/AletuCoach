import Image from 'next/image';
import isologo from '../public/images/logo.png';
import {services} from '../components/services';

export default function Features() {



  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6"  >
        <div className="py-12 md:py-20" data-aos="fade-down" data-aos-anchor-placement="top-bottom">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-beige-200 font-bellezaRegular" data-aos-once="true">CAMBIO, SANACIÓN Y TRANSFORMACIÓN PERSONAL</h2>
            <p className="text-xl text-gray-900 font-nowLight 00"  >Tus pensamientos generan emociones.</p>
            <p className="text-xl text-gray-900 font-nowLight 00"  >Tus emociones producen cambios fisiológicos</p>
            <p className="text-xl text-gray-900 font-nowLight 00"   data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-delay="1000">Estas emociones mantenidas en el tiempo se convierten en estados emocionales que impactan directamente en tu Salud y Bienestar.</p>
            
            <Image
            src={isologo}
            alt="Isologotipo"
            width={350}
            height={200}
            />                  
          </div>
  

          {/* Items */}
        <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-1 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            {/* 1st item */}
            <div className="relative flex flex-col items-center" >

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
            height={200} />

<h2 className="h2 mb-4 text-beige-200 font-bellezaRegular text-center">¿CÓMO TE PUEDO AYUDAR?</h2>

            <p className="text-xl text-gray-900 font-nowLight 00 text-center">A través de sesiones individuales, experiencias grupales,  charlas, cursos y retiros.</p>
            <p className="text-xl text-gray-900 font-nowLight 00 text-center">Te acompaño de manera profesional, confidencial y amorosa en tu proceso de Cambio, Sanación y Transformación.</p>
            <p className="text-xl text-gray-900 font-nowLight 00 text-center">Transitemos junt@s el camino de Consciencia, Amor y Libertad Personal.</p>

           
             <Image
            src={isologo}
            alt="Isologotipo"
            width={350}
            height={200}
            />

<h2 className="h2 mb-4 text-beige-200 font-bellezaRegular text-center" style={{ marginBottom: '2px' }}>¿TIENES UN OBJETIVO?</h2>
<h2 className="h2 mb-4 text-beige-200 font-bellezaRegular text-center" style={{ marginTop: '2px' }}>¡VAMOS POR ELLO!</h2>
     
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
                  
            </div>
      

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
              <h3 className="text-purple-700 font-bellezaRegular text-center mb-2">{service.title}</h3>
              <p className="text-gray-700 font-nowLight text-center">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </section>

    
  )
}
