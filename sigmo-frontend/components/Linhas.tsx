import Link from 'next/link';
import Image from 'next/image';

const Linhas = () => {
    return (
        <div className="max-w-[1292px] mx-auto mt-20">
        <div className="flex gap-8">
          {/* Card Linha 8 */}
          <div
            className="bg-no-repeat p-12 rounded-[35px] flex-1 bg-[-15px] bg-[auto_120%] drop-shadow-xl border !border-opacity-50 bg-white"
            style={{ backgroundImage: "url('/img/8.png')" }}
          >
            <div className="pl-[120px]">
              <h3 className="text-2xl font-light text-left">Acompanhe o status da Linha 8</h3>
              <p className="text-[#8c8c8c] mt-4">
                Confira o status operacional ou faça um reporte relacionado à Linha 8 Diamante.
              </p>
              <Link
                href="/status#linha-8"
                className="text-[#8b2119] font-medium mt-4 inline-block"
              >
                Saiba Mais &gt;
              </Link>
            </div>
          </div>
          {/* Card Linha 9 */}
          <div
            className="bg-no-repeat p-12 rounded-[35px] flex-1 bg-[-15px] bg-[auto_120%] drop-shadow-xl border !border-opacity-50 bg-white"
            style={{ backgroundImage: "url('/img/9.png')" }}
          >
            <div className="pl-[120px]">
              <h3 className="text-2xl font-light text-left">Acompanhe o status da Linha 9</h3>
              <p className="text-[#8c8c8c] mt-4">
                Confira o status operacional ou faça um reporte relacionado à Linha 9 Esmeralda.
              </p>
              <Link
                href="/status#linha-9"
                className="text-[#8b2119] font-medium mt-4 inline-block"
              >
                Saiba Mais &gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Linhas;