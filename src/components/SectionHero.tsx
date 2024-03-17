import Image from "next/image";
import { Container } from "./Container";
import ImageWoman from "@/assets/woman.png";
import IconApple from "@/assets/btn-apple-store.svg";
import IconGoogle from "@/assets/btn-google-play.svg";
import Arrow from "@/assets/arrow-explorer.svg";

export function SectionHero() {
  return (
    <section className="w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
      <Container>
        <div className="flex-1 max-w-[500px] text-white">
          <h1 className="font-bold text-7xl mb-4">
            Tenha seu banco na palma da mão.
          </h1>
          <p className="text-xl max-w-[408px] mb-8">
            Todas as operações que você precisa em um só lugar. Simples,
            completo e feito pra você.
          </p>
          <div className="flex gap-4 mb-24">
            <button>
              <Image src={IconApple} alt="Icone Apple" />
            </button>
            <button>
              <Image src={IconGoogle} alt="Icone Google play" />
            </button>
          </div>
          <button className="flex items-center gap-3">
            <Image src={Arrow} alt="Seta pra baixo" />
            <span className="font-bold">Continue explorando</span>
          </button>
        </div>
        <Image src={ImageWoman} alt="Imagem mulher" className="mr-[-41px]" />
      </Container>
    </section>
  );
}
