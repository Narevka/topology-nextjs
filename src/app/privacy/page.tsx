import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f5f0eb]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-[#d4a574]/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center gap-2">
                <Image src="/logo.png" alt="Topology" width={120} height={40} className="h-auto" />
              </a>
              <div className="hidden lg:flex gap-8">
                <a href="/#about" className="text-sm font-medium text-white hover:text-white/80 transition-colors uppercase">O NAS</a>
                <a href="/#products" className="text-sm font-medium text-white hover:text-white/80 transition-colors uppercase">PRODUKTY</a>
                <a href="/#contact" className="text-sm font-medium text-white hover:text-white/80 transition-colors uppercase">KONTAKT</a>
                <a href="/privacy" className="text-sm font-medium text-white hover:text-white/80 transition-colors uppercase">PRYWATNOŚĆ</a>
                <a href="/terms" className="text-sm font-medium text-white hover:text-white/80 transition-colors uppercase">REGULAMIN</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Polityka Prywatności</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Administrator danych osobowych</h2>
            <p className="mb-4">
              Administratorem Twoich danych osobowych jest Karol Sapiolko, prowadzący działalność gospodarczą pod nazwą Topology, 
              z siedzibą w Warszawie.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Jakie dane zbieramy</h2>
            <p className="mb-4">Zbieramy następujące dane osobowe:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Dane identyfikacyjne: imię, nazwisko</li>
              <li>Dane kontaktowe: adres e-mail, numer telefonu</li>
              <li>Dane techniczne: adres IP, typ przeglądarki, system operacyjny</li>
              <li>Dane dotyczące korzystania z witryny: historia przeglądania, preferencje</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Cel przetwarzania danych</h2>
            <p className="mb-4">Twoje dane osobowe przetwarzamy w celu:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Realizacji zapytań i komunikacji z klientami</li>
              <li>Świadczenia usług drogą elektroniczną</li>
              <li>Prowadzenia analiz statystycznych i optymalizacji strony</li>
              <li>Marketingu bezpośredniego (za zgodą)</li>
              <li>Wypełnienia obowiązków prawnych</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Podstawa prawna przetwarzania</h2>
            <p className="mb-4">
              Przetwarzanie danych osobowych odbywa się na podstawie:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Art. 6 ust. 1 lit. a) RODO - zgoda osoby, której dane dotyczą</li>
              <li>Art. 6 ust. 1 lit. b) RODO - wykonanie umowy</li>
              <li>Art. 6 ust. 1 lit. f) RODO - prawnie uzasadniony interes administratora</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Okres przechowywania danych</h2>
            <p className="mb-4">
              Twoje dane osobowe będą przetwarzane przez okres niezbędny do realizacji celów określonych powyżej, 
              a po tym czasie przez okres oraz w zakresie wymaganym przez przepisy prawa.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Odbiorcy danych</h2>
            <p className="mb-4">
              Twoje dane osobowe mogą być przekazywane następującym kategoriom odbiorców:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Dostawcom usług IT i hostingowych</li>
              <li>Dostawcom systemów analitycznych (np. Google Analytics)</li>
              <li>Organom uprawnionym na podstawie przepisów prawa</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Twoje prawa</h2>
            <p className="mb-4">Przysługuje Ci prawo do:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania</li>
              <li>Cofnięcia zgody w dowolnym momencie</li>
              <li>Wniesienia skargi do organu nadzorczego (UODO)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Pliki cookies</h2>
            <p className="mb-4">
              Nasza strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego funkcjonowania serwisu, 
              analizy ruchu oraz personalizacji treści. Możesz zarządzać ustawieniami cookies w swojej przeglądarce.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Bezpieczeństwo danych</h2>
            <p className="mb-4">
              Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające ochronę przetwarzanych danych osobowych 
              odpowiednią do zagrożeń oraz kategorii danych objętych ochroną.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Kontakt</h2>
            <p className="mb-4">
              W sprawach dotyczących ochrony danych osobowych możesz skontaktować się z nami:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>E-mail: kontakt@topology.pl</li>
              <li>Adres: Warszawa, Polska</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2025 Topology by Karol Sapiolko. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
