import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Terms() {
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
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Regulamin Serwisu</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">§ 1. Postanowienia ogólne</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Niniejszy Regulamin określa zasady korzystania ze strony internetowej Topology.</li>
              <li className="mb-2">Administratorem serwisu jest Karol Sapiolko, prowadzący działalność gospodarczą pod nazwą Topology.</li>
              <li className="mb-2">Kontakt z Administratorem możliwy jest pod adresem e-mail: kontakt@topology.pl</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">§ 2. Definicje</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2"><strong>Serwis</strong> - strona internetowa dostępna pod adresem www.topology.pl</li>
              <li className="mb-2"><strong>Administrator</strong> - Karol Sapiolko prowadzący działalność gospodarczą Topology</li>
              <li className="mb-2"><strong>Użytkownik</strong> - każda osoba fizyczna, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, korzystająca z Serwisu</li>
              <li className="mb-2"><strong>Produkt</strong> - półki drukowane w technologii 3D prezentowane w Serwisie</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">§ 3. Warunki korzystania z Serwisu</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Korzystanie z Serwisu jest możliwe pod warunkiem spełnienia przez system teleinformatyczny, z którego korzysta Użytkownik następujących minimalnych wymagań technicznych:
                <ul className="list-disc pl-6 mt-2">
                  <li>Przeglądarka internetowa z włączoną obsługą JavaScript i cookies</li>
                  <li>Połączenie z Internetem</li>
                  <li>Rozdzielczość ekranu minimum 1024x768</li>
                </ul>
              </li>
              <li className="mb-2">Zakazane jest dostarczanie przez Użytkownika treści o charakterze bezprawnym.</li>
              <li className="mb-2">Użytkownik zobowiązany jest do korzystania z Serwisu w sposób zgodny z prawem, dobrymi obyczajami oraz postanowieniami niniejszego Regulaminu.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">§ 4. Informacje o produktach</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Serwis prezentuje produkty - półki drukowane w technologii 3D.</li>
              <li className="mb-2">Wszystkie ceny podane w Serwisie są cenami brutto (zawierają podatek VAT).</li>
              <li className="mb-2">Zdjęcia produktów mają charakter poglądowy i mogą nieznacznie różnić się od rzeczywistego wyglądu produktu.</li>
              <li className="mb-2">Dostępność produktów może się zmieniać w zależności od ich produkcji.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">§ 5. Kontakt i zapytania</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Użytkownik może kontaktować się z Administratorem w sprawie produktów poprzez formularz kontaktowy lub e-mail.</li>
              <li className="mb-2">Administrator zobowiązuje się do odpowiedzi na zapytanie w terminie do 48 godzin roboczych.</li>
              <li className="mb-2">Indywidualne zamówienia i oferty są przygotowywane na żądanie Użytkownika.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">§ 6. Własność intelektualna</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Wszelkie treści zamieszczone w Serwisie, w tym grafiki, zdjęcia, teksty, logo stanowią przedmiot praw wyłącznych Administratora.</li>
              <li className="mb-2">Kopiowanie, rozpowszechnianie lub inne wykorzystywanie treści bez zgody Administratora jest zabronione.</li>
              <li className="mb-2">Projekty półek 3D są chronione prawami autorskimi i stanowią własność intelektualną Topology.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">§ 7. Odpowiedzialność</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Administrator dokłada wszelkich starań, aby informacje w Serwisie były aktualne i prawidłowe.</li>
              <li className="mb-2">Administrator nie ponosi odpowiedzialności za nieciągłość dostępu do Serwisu wynikającą z przyczyn technicznych.</li>
              <li className="mb-2">Administrator nie ponosi odpowiedzialności za szkody powstałe w wyniku korzystania z Serwisu niezgodnie z jego przeznaczeniem.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">§ 8. Dane osobowe</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Szczegółowe informacje dotyczące przetwarzania danych osobowych znajdują się w <a href="/privacy" className="text-[#e8895f] underline">Polityce Prywatności</a>.</li>
              <li className="mb-2">Administrator przetwarza dane osobowe zgodnie z przepisami RODO.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">§ 9. Postanowienia końcowe</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Administrator zastrzega sobie prawo do zmiany Regulaminu w dowolnym czasie.</li>
              <li className="mb-2">Zmiany Regulaminu wchodzą w życie z chwilą ich opublikowania w Serwisie.</li>
              <li className="mb-2">W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego.</li>
              <li className="mb-2">Ewentualne spory będą rozstrzygane przez właściwe sądy w Polsce.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">§ 10. Kontakt</h2>
            <p className="mb-4">
              W razie pytań dotyczących Regulaminu prosimy o kontakt:
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
