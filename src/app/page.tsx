import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
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
                <a href="#about" className="text-sm font-medium text-white hover:text-white/80 transition-colors uppercase">O NAS</a>
                <a href="#products" className="text-sm font-medium text-white hover:text-white/80 transition-colors uppercase">PRODUKTY</a>
                <a href="#contact" className="text-sm font-medium text-white hover:text-white/80 transition-colors uppercase">KONTAKT</a>
                <a href="/privacy" className="text-sm font-medium text-white hover:text-white/80 transition-colors uppercase">PRYWATNOŚĆ</a>
                <a href="/terms" className="text-sm font-medium text-white hover:text-white/80 transition-colors uppercase">REGULAMIN</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button className="bg-[#e8895f] hover:bg-[#d67850] text-white border-0 px-6">
                🛒 CART
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Beżowy Background z półką 3D */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#e8c4a0] via-[#d4a574] to-[#c9a68a] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <Image 
            src="/images/polka-main.jpg" 
            alt="3D Printed Shelf" 
            fill
            className="object-cover object-left opacity-90"
          />
        </div>
        <div className="container relative mx-auto px-4 py-20">
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Wydrukowane<br />by robić wrażenie
            </h1>
            <Button size="lg" className="bg-[#e8895f] hover:bg-[#d67850] text-white text-lg px-8 py-6 mt-6 border-2 border-white/30">
              ODKRYJ NASZE KREACJE
            </Button>
          </div>
        </div>
      </section>

      {/* Półki Wiszące Topology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative aspect-square">
              <Image 
                src="/images/polka-thumb.png" 
                alt="Półka 3D" 
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-6 italic">PÓŁKI WISZĄCE TOPOLOGY</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nasze półki, powstające w technologii druku 3D, są wynikiem precyzyjnych obliczeń oraz 
                inspiracji naturą. Dzięki optymalizacji topologicznej tworzymy formy, które są zarówno niezwykle 
                wytrzymałe, o lekki strukturze, organicznie wygięte dopełnią najbardziej współczesne wnętrze.
              </p>
              <Button className="bg-[#e8895f] hover:bg-[#d67850] text-white px-8 py-4">
                ZOBACZ DOKUMENTACJĘ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - 3 warianty półek */}
      <section className="py-20 bg-[#f5f0eb]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">PRODUCTS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* FORCE COLOR */}
            <Card className="group overflow-hidden bg-black text-white border-0 hover:shadow-2xl transition-all duration-500">
              <CardHeader className="p-0 relative h-[400px]">
                <Image 
                  src="/images/polka-thumb.png" 
                  alt="Force Color Shelf" 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </CardHeader>
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold mb-4 italic">FORCE COLOR</h3>
                <p className="text-gray-300 mb-6">
                  Printed from plastic with unique color transitions
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-all">
                  READ MORE
                </Button>
              </CardContent>
            </Card>

            {/* CARBON CORE */}
            <Card className="group overflow-hidden bg-gradient-to-br from-purple-200 to-blue-200 border-0 hover:shadow-2xl transition-all duration-500">
              <CardHeader className="p-0 relative h-[400px]">
                <Image 
                  src="/images/polka-main.jpg" 
                  alt="Carbon Core Shelf" 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </CardHeader>
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold mb-4 italic text-gray-900">CARBON CORE</h3>
                <p className="text-gray-700 mb-6">
                  Printed from filament reinforced with carbon fibers
                </p>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                  READ MORE
                </Button>
              </CardContent>
            </Card>

            {/* SINTER STEEL */}
            <Card className="group overflow-hidden bg-gradient-to-br from-emerald-400 to-teal-500 text-white border-0 hover:shadow-2xl transition-all duration-500">
              <CardHeader className="p-0 relative h-[400px]">
                <Image 
                  src="/images/polka-thumb.png" 
                  alt="Sinter Steel Shelf" 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </CardHeader>
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold mb-4 italic">SINTER STEEL</h3>
                <p className="text-white/90 mb-6">
                  In super wytrzymałości wykonanie ze stali
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 transition-all">
                  READ MORE
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section - TOPOLOGY POLKA */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/polka-main.jpg')"
          }}
        />
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 italic">TOPOLOGY POLKA</h2>
          <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm p-12 rounded-lg">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-gray-900 border-b-[15px] border-b-transparent ml-2"></div>
              </div>
            </div>
            <p className="text-xl mb-4">Film obcok</p>
            <p className="text-gray-300">jak wytworzyć</p>
            <p className="text-gray-300">polke</p>
            <Button variant="link" className="text-white underline mt-4">
              WATCH VIDEO
            </Button>
          </div>
        </div>
      </section>

      {/* Features - 4 ikony */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: "📜", title: "2-YEAR", subtitle: "WARRANTY" },
              { icon: "💰", title: "MONEY-BACK", subtitle: "GUARANTEE" },
              { icon: "🚚", title: "INTERNATIONAL", subtitle: "SHIPPING" },
              { icon: "🎯", title: "3D PRINT CUSTOM YOUR", subtitle: "RESOLUTION" }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 border-2 border-gray-900 rounded-full flex items-center justify-center text-3xl">
                  {feature.icon}
                </div>
                <p className="font-bold text-sm">{feature.title}</p>
                <p className="text-sm text-gray-600">{feature.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Section - KUP PÓŁKĘ */}
      <section className="py-20 bg-[#f5f0eb]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wide text-gray-600 mb-2">PRODUKTY</p>
            <h2 className="text-5xl font-bold italic">KUP PÓŁKĘ</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative aspect-square bg-white p-8 rounded-lg">
                <Image 
                  src="/images/polka-thumb.png" 
                  alt="3D Printed Shelf 60x20" 
                  fill
                  className="object-contain p-4"
                />
              </div>
              
              <div>
                <h3 className="text-4xl font-bold italic mb-6">3D PRINTED SHELF 60×20</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  This 3D-printed wall shelf is the result of a topology optimization, ensuring the ideal balance of strength and material efficiency.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Strength and Durability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Aesthetic Appeal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Eco-Friendly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Minimalist Design</span>
                  </li>
                </ul>
                
                <div className="text-4xl font-bold text-[#e8895f] mb-6">
                  299,00 zł – 550,00 zł
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">MATERIAL</label>
                  <select className="w-full p-3 border border-gray-300 rounded">
                    <option>Choose an option</option>
                    <option>PLA Plastic</option>
                    <option>Carbon Fiber</option>
                    <option>Steel</option>
                  </select>
                </div>

                <div className="flex gap-4 items-center mb-6">
                  <label className="font-medium">Quantity</label>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">-</Button>
                    <input type="number" defaultValue="1" className="w-16 text-center border p-2" />
                    <Button variant="outline" size="sm">+</Button>
                  </div>
                  <Button className="flex-1 bg-[#e8895f] hover:bg-[#d67850] text-white py-6 text-lg">
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-gray-300" />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <Image src="/logo.png" alt="Topology" width={120} height={40} className="mb-4 brightness-0 invert" />
              <p className="text-gray-400 text-sm">Premium products<br />for modern living</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">SHOP</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">All Products</li>
                <li className="hover:text-white transition-colors cursor-pointer">3D Printed Shelves</li>
                <li className="hover:text-white transition-colors cursor-pointer">Custom Orders</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">SUPPORT</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
                <li className="hover:text-white transition-colors cursor-pointer">FAQ</li>
                <li className="hover:text-white transition-colors cursor-pointer">Shipping</li>
                <li className="hover:text-white transition-colors cursor-pointer">Returns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">CONNECT</h4>
              <div className="flex gap-4">
                {['f', 't', 'y', 'g+', 'p'].map((social) => (
                  <div key={social} className="w-10 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all cursor-pointer">
                    {social}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="text-center text-gray-400 text-sm">
            <p>Copyright © 2025 Topology by 200 Karol Sapiolko Warszawa. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
