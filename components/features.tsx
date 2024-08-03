export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-beige-800 font-bellezaRegular">La felicidad no depende de las circunstancias externas. No se trata de suerte, ni de dinero. La felicidad está en ver el MILAGRO de cada instante.</h2>
            <p className="text-xl text-gray-900 font-nowLight 00">La felicidad está en lo que nos encanta hacer y que perdemos la noción del tiempo cuando estamos inmersos en eso… En tus logros y los logros de los que amas… Esta en tu compromiso y tu propósito.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
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
</svg>


              <h4 className="h4 mb-2 text-gray-800 font-bellezaRegular">El Amor</h4>
              <p className="text-lg text-gray-950 text-center font-nowLight">El amor nos recuerda nuestro origen y nuestro destino. No existe energía más poderosa y alquímica que el AMOR. El amor es esa energía perfecta manifestada de diferentes formas. ♥️</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3" />
                </g>
              </svg>
              <h4 className="h4 mb-2 text-gray-800 font-bellezaRegular">Mindfulness</h4>
              <p className="text-lg text-gray-950 text-center font-nowLight">A veces practicar meditación es un acto desagdable o incómodo, porque tenemos nuestra mente con demasiado ruido mental. Lo más bello de esto, es que una vez que aprendes a sostener ese ruido y a lidiar con esos monos locos que tenemos en la cabeza. Todo empieza a equilibrarse. Comienzan a desaparecer nuestras corazas que hemos creado para aliviar el dolor y florece nuestra verdad.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                  <path className="stroke-current text-purple-300" d="M22 30h4v12h-4z" />
                </g>
              </svg>
              <h4 className="h4 mb-2 text-gray-800 font-bellezaRegular">Relaciones Sanas</h4>
              <p className="text-lg text-gray-950 font-nowLight text-center">Las relaciones sanas elevan tu frecuencia, sacan lo mejor de ti, te hacen sentir en paz, te potencian, te respetan y te hacen sentir bien</p>
            </div>

         

          </div>

        </div>
      </div>
    </section>
  )
}
