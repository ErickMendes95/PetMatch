import Image from "next/image";

export default function Home() {
  return (
    <main className="text-black w-full h-screen flex flex-col">
      <h1 className="text-blue-400 text-4xl md:text-5xl text-center mt-5 mb-8">
        Bem-vindo(a) ao PetMatch!
      </h1>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-4 mx-4 md:mx-10">
        <div className="md:w-1/2">
          <Image
            src="/pets.webp"
            alt="pets"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl md:text-2xl mb-4">
            Encontre seu Amigo Perfeito!
          </h2>
          <p className="text-lg md:text-base mb-4">
            Você está prestes a dar um passo importante: encontrar seu
            companheiro perfeito.
          </p>
          <p className="text-lg md:text-base mb-4">
            Nossa missão é unir almas afins, conectando corações carentes e
            patinhas ansiosas por carinho. Aqui, o amor ganha forma e um simples
            gesto pode transformar vidas. Adoção é sinônimo de esperança,
            gratidão e felicidade compartilhada.
          </p>
          <p className="text-lg md:text-base mb-4">
            Ao adotar um pet, você está dando a ele uma nova chance, um lar onde
            ele será amado incondicionalmente. Juntos, podemos fazer a diferença
            na vida desses seres especiais.
          </p>
          <p className="text-lg md:text-base">
            Bem-vindo(a) ao PetMatch, onde histórias de amor ganham vida.
          </p>
        </div>
      </div>
    </main>
  );
}
