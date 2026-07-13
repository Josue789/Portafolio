import Contact from "../pages/contact";
import { Modal } from "@heroui/react";
import React from "react";

const navigation = [
  { name: "About me", href: "#aboutme", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact", href: "#", current: false },
];

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div>
      <nav className="fixed w-full z-40 top-0 inset-s-0 bg-white/30 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-100">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
              Josue's Portfolio
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              {navigation.map((item) => (
                <li key={item.name}>
                  {item.name === "Contact" ? (
                    <button
                      
                      onClick={() => {
                        console.log("abriendo");
                        setIsOpen(true);
                        setIsMenuOpen(false); // Cierra el menú al abrir el modal
                      }}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 cursor-pointer"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic en un enlace
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <Modal.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Container>
          <Modal.Dialog className="w-full max-w-md mx-auto text-black">
            <Modal.CloseTrigger />

           

            <Modal.Body>
             <Contact />
            </Modal.Body>

            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </div>
  );
}

export default Navbar;
