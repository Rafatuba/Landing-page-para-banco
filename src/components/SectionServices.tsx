import Image from "next/image";
import { Container } from "./Container";
import PhoneIcon from "@/assets/icon-phone.svg";
import SolutionIcon from "@/assets/icon-solutions.svg"
import OptionIcon from "@/assets/icon-options.svg"
import CardIcon from "@/assets/icon-card.svg"
import PhoneImage from "@/assets/phone.png"

export function SectionServices() {
  return (
    <section className="relative w-full h-[965px]">
      <Container>
        <div className="flex-1 max-w-[594px] pt-32">
          <span className="block text-primary-orange font-bold text-sm mb-9">
            SERVIÇOS EXCLUSIVOS
          </span>
          <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">
            Gerencie suas finanças sem sair de casa
          </h2>
          <p className="text-lg text-second-gray max-w-[554px] mb-16">
            Veja como você pode cuidar das suas finanças pelo app Itaú de forma
            segura, rápida e o melhor, no conforto de sua casa.
          </p>
          <ul className="flex flex-col gap-9 items-start">
            <li className="flex items-center gap-9 border-b border-b-text-gray/[.5] pb-9 w-full">
              <div className="w-7 h-7 flex justify-center items-center">
              <Image
                src={PhoneIcon}
                alt="Icone celular"
              />
              </div>
              <p className="flex-1 text-text-gray">Acompanhar sua conta, fazer transferências e pagamentos de onde estiver</p>
            </li>
            <li className="flex items-center gap-9 border-b border-b-text-gray/[.5] pb-9 w-full">
              <div className="w-7 h-7 flex justify-center items-center">
              <Image
                src={SolutionIcon}
                alt="Icone Solução"
              />
              </div>
              <p className="flex-1 text-text-gray">Soluções de empréstimos e renegociação para organizar suas finanças</p>
            </li>
            <li className="flex items-center gap-9 border-b border-b-text-gray/[.5] pb-9 w-full">
              <div className="w-7 h-7 flex justify-center items-center">
              <Image
                src={OptionIcon}
                alt="Icone Opção"
              />
              </div>
              <p className="flex-1 text-text-gray">Diversas opções de investimentos, de acordo com seu perfil de investidor</p>
            </li>
            <li className="flex items-center gap-9">
              <div className="w-7 h-7 flex justify-center items-center">
              <Image
                src={CardIcon}
                alt="Icone Cartão"
              />
              </div>
              <p className="flex-1 text-text-gray">Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual</p>
            </li>
          </ul>
        </div>
      </Container>
      <div className="absolute top-0 right-0 h-full w-[32%] bg-gray-phone flex items-center">
        <Image
          src={PhoneImage}
          alt="Imagem do smartphone"
          className="translate-x-[-50%]"
        />
      </div>
    </section>
  );
}
