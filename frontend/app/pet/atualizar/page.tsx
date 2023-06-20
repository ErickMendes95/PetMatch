import Image from "next/image";

export default function UpdatePet() {
  return (
    <main className="bg-green-400 w-full h-screen flex flex-col">
      <div className="bg-red-500 text-center mt-5 text-2xl">
        <h1>PetMatch</h1>
      </div>
      <div className="bg-blue-500 mt-10 flex justify-between">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          perspiciatis, obcaecati necessitatibus ipsam quis tenetur facilis
          dolore quia, autem pariatur modi. Qui consectetur ullam sint,
          voluptatibus praesentium doloremque facere quos.
        </h1>
        <Image src="/pets.webp" alt="pets" width={700} height={700} />
      </div>
    </main>
  );
}