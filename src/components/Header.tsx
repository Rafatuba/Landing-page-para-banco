import Image from "next/image";
import Logo from "@/assets/logo.svg";
import IconUser from "@/assets/icon-user.svg"
import { ItemMenu } from "./ItemMenu";
import { Search } from "./Search";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="flex items-center w-full h-20 bg-primary-orange">
      <Container>
        <div className="flex flex-1 items-center justify-around">
          <div className="flex items-center gap-14">
            <Image src={Logo} alt="Logo" />
            <ul className="flex items-center gap-12">
              <li>
                <ItemMenu name="Para você" />
              </li>
              <li>
                <ItemMenu name="Para empresas" />
              </li>
              <li>
                <ItemMenu name="Serviços" />
              </li>
              <li>
                <ItemMenu name="Ajuda" />
              </li>
            </ul>
          </div>
          <Search/>
        </div>
      </Container>
        <button className="flex items-center gap-4 bg-primary-blue h-20 px-10">
          <Image
            src={IconUser}
            alt="Icone usuário"
          />
          <span className="text-white font-bold">Acessar conta</span>
        </button>
    </header>
  );
}



// https://youtu.be/6-2xfn6wzvU?si=PJj2WEgDmgRbh4oX
