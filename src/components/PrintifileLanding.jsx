import React, { useState, useEffect } from "react";
import {
  Award,
  Truck,
  Palette,
  Clock,
  Users,
  Shield,
  Star,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { mockData } from "../mock";

const PrintifileLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(
        (prev) => (prev + 1) % mockData.testimonials.length
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const iconMap = {
    Award,
    Truck,
    Palette,
    Clock,
    Users,
    Shield,
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-indigo-900 to-indigo-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm lg:text-base">
                  P
                </span>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-gray-900">
                Printifile
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {mockData.navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-600 hover:text-indigo-900 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-indigo-200 text-indigo-900 hover:bg-indigo-50"
              >
                Start Customizing
              </Button>
              <Button className="bg-gradient-to-r from-indigo-900 to-indigo-700 hover:from-indigo-800 hover:to-indigo-600">
                Shop Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                {mockData.navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-gray-600 hover:text-indigo-900 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <Button
                    variant="outline"
                    className="border-indigo-200 text-indigo-900 hover:bg-indigo-50"
                  >
                    Start Customizing
                  </Button>
                  <Button className="bg-gradient-to-r from-indigo-900 to-indigo-700 hover:from-indigo-800 hover:to-indigo-600">
                    Shop Now
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full bg-green-500 hover:bg-green-600 shadow-lg h-14 w-14 p-0"
          onClick={() => window.open("https://wa.me/+917765054874", "_blank")}
        >
          <Phone size={24} />
        </Button>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-gray-50 to-indigo-50 py-12 lg:py-20"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-saffron-100 text-saffron-800 hover:bg-saffron-200 px-4 py-1">
                  🇮🇳 Made in India • Premium Quality
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Print Your
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-saffron-600">
                    {" "}
                    Brand Story
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Customizable print solutions for businesses, startups, and
                  creators — from visiting cards to complete onboarding kits.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-900 to-indigo-700 hover:from-indigo-800 hover:to-indigo-600 h-12"
                >
                  Start Designing
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-indigo-200 text-indigo-900 hover:bg-indigo-50 h-12"
                >
                  Shop Products
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">1M+</div>
                  <div className="text-sm text-gray-600">Products Printed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Cities Served</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop"
                  alt="Branded office kit mockup"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-indigo-200 to-saffron-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Categories */}
      <section id="shop" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our premium printing solutions designed for modern Indian
              businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {mockData.categories.map((category) => (
              <Card
                key={category.id}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Button className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-white text-indigo-900 hover:bg-gray-100">
                    Customize Now
                  </Button>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.tagline}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.products.slice(0, 2).map((product, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {product}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Showcase */}
      <section
        id="design"
        className="py-16 lg:py-24 bg-gradient-to-br from-indigo-50 to-gray-50"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">
                      Custom Editor
                    </span>
                    <Badge className="bg-green-100 text-green-800">
                      Live Preview
                    </Badge>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop"
                    alt="Custom editor interface"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                Your Brand,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-saffron-600">
                  {" "}
                  Your Way
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Choose from 100+ templates or upload your own design. Edit
                names, logos, and details in real time before you print. Our
                intuitive editor makes professional design accessible to
                everyone.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Palette className="text-indigo-900" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      100+ Templates
                    </div>
                    <div className="text-sm text-gray-600">
                      Professional designs
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-saffron-100 rounded-lg flex items-center justify-center">
                    <Users className="text-saffron-800" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Live Preview
                    </div>
                    <div className="text-sm text-gray-600">
                      See before you print
                    </div>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-900 to-indigo-700 hover:from-indigo-800 hover:to-indigo-600"
              >
                Try Custom Editor
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trending Products
            </h2>
            <p className="text-lg text-gray-600">
              Most popular items chosen by Indian businesses
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {mockData.trendingProducts.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-white text-indigo-900">
                    {product.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-saffron-600 font-bold mb-3">
                    {product.price}
                  </p>
                  <div className="space-y-2">
                    <Button
                      className="w-full bg-saffron-600 hover:bg-saffron-500 text-white"
                      size="sm"
                    >
                      Customize
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full text-green-600 border-green-200 hover:bg-green-50"
                      size="sm"
                    >
                      Order on WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Showcase */}
      <section
        id="design"
        className="py-16 lg:py-24 bg-gradient-to-br from-indigo-50 to-gray-50"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">
                      Custom Editor
                    </span>
                    <Badge className="bg-green-100 text-green-800">
                      Live Preview
                    </Badge>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop"
                    alt="Custom editor interface"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                Your Brand,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-saffron-600">
                  {" "}
                  Your Way
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Choose from 100+ templates or upload your own design. Edit
                names, logos, and details in real time before you print. Our
                intuitive editor makes professional design accessible to
                everyone.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Palette className="text-indigo-900" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      100+ Templates
                    </div>
                    <div className="text-sm text-gray-600">
                      Professional designs
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-saffron-100 rounded-lg flex items-center justify-center">
                    <Users className="text-saffron-800" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Live Preview
                    </div>
                    <div className="text-sm text-gray-600">
                      See before you print
                    </div>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-saffron-600 hover:bg-saffron-500 text-white"
              >
                Try Custom Editor
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrintifileLanding;
