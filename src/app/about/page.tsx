import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#1a1a1a] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Topology"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-xl font-bold">topology</span>
          </div>
          <div className="flex space-x-6">
            <a href="/" className="hover:text-[#7c3aed] transition-colors">
              Home
            </a>
            <a href="/about" className="hover:text-[#7c3aed] transition-colors text-[#7c3aed]">
              About Us
            </a>
            <a href="/privacy" className="hover:text-[#7c3aed] transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-[#7c3aed] transition-colors">
              Terms
            </a>
            <a href="/faq" className="hover:text-[#7c3aed] transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <p className="text-gray-600">Home &gt; About Us</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">About us</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Topology, we believe that the future of technology lies in harmony with nature. 
            We are a forward-thinking company specializing in eco-friendly technologies, organic 
            design, and tech-aesthetics. By merging innovation with sustainability, we aim to create 
            products and solutions that not only advance technological progress but also respect and 
            preserve our planet.
          </p>
        </div>

        {/* Our Vision */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our vision is to lead the way in sustainable technology by creating solutions that blend 
            seamlessly with the environment, enhancing the natural world rather than depleting it. 
            We believe that technology can be beautiful, functional, and eco-conscious, all at once.
          </p>
        </div>

        {/* Fun Facts */}
        <div className="mb-16 bg-gradient-to-r from-purple-50 to-green-50 p-12 rounded-lg">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Fun fact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#7c3aed] mb-2">1549</div>
              <div className="text-lg text-gray-600">happy clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#7c3aed] mb-2">37</div>
              <div className="text-lg text-gray-600">award winning</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#7c3aed] mb-2">1549</div>
              <div className="text-lg text-gray-600">happy clients</div>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">What We Do</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Topology is at the forefront of a growing movement that merges advanced technology with 
            sustainability. Our services and products include:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Eco-Friendly Technologies</h3>
              <p className="text-gray-700 leading-relaxed">
                We design and develop technologies that minimize environmental impact. From energy-efficient 
                devices to renewable resource-powered solutions, sustainability is at the core of everything we do.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Organic Design</h3>
              <p className="text-gray-700 leading-relaxed">
                Our design philosophy is inspired by nature. We focus on creating products with flowing, 
                organic forms that are as aesthetically pleasing as they are functional. Every design is 
                thoughtfully crafted with sustainability in mind, using eco-friendly materials and processes.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Why choose us</h2>
          <p className="text-xl font-semibold mb-8 text-gray-700">Quality is our key business</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 text-4xl">🌱</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Sustainability First</h3>
              <p className="text-gray-600">
                Environmental responsibility is at the heart of our mission. We prioritize 
                sustainable practices in everything we create.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 text-4xl">💡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Innovative Solutions</h3>
              <p className="text-gray-600">
                We push the boundaries of what's possible, delivering cutting-edge solutions 
                that solve real-world problems.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 text-4xl">🎨</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Beautifully Designed Technology</h3>
              <p className="text-gray-600">
                Our products don't just work well—they look and feel like they belong in the 
                natural world, seamlessly integrating with their surroundings.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 Topology. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
