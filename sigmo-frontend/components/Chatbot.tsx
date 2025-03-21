import Link from 'next/link';
import Image from 'next/image';

const Chatbot = () => {
    return (
        <section className="mt-40 mb-20">
        <div className="bg-[image:var(--grad-verde)] from-[#67e7d7] to-[#01aa95] rounded-[50px] shadow-lg flex">
          <div className="w-1/2 flex items-end">
            <img src="/img/vimo-2.png" alt="Chatbot" className="w-full -mt-5" />
          </div>
          <div className="w-1/2 p-12 self-center">
            <h2 className="text-5xl font-bold text-white">
              <span className="font-light">Converse com o Vimo</span>
              <br />
              Seu assistente virtual
            </h2>
            <p className="text-white mt-6">
              Vimo é seu assistente virtual disponível 24 horas para responder suas dúvidas e ajudar
              em tudo que precisar.
            </p>
            <Link
              href="#"
              className="bg-white text-[#01aa95] py-3 px-8 rounded-full font-bold mt-8 inline-block"
            >
              Conhecer o Vimo
            </Link>
          </div>
        </div>
      </section>
    );
};

export default Chatbot;