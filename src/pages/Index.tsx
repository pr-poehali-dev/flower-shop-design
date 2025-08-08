import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const FlyFlower = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bouquet: '',
    date: ''
  });

  const bouquets = [
    {
      id: 1,
      name: "Нежность",
      price: "3,500₽",
      description: "Романтичный букет из розовых роз и эвкалипта",
      image: "/img/36438071-8f32-419b-8dc7-e9de7e2aad0b.jpg"
    },
    {
      id: 2,
      name: "Весенний сад",
      price: "2,800₽", 
      description: "Яркие тюльпаны с веточками мимозы",
      image: "/img/68052def-8bae-4b32-bc6c-d85c607b30d0.jpg"
    },
    {
      id: 3,
      name: "Классика",
      price: "4,200₽",
      description: "Элегантные белые розы с зеленью",
      image: "/img/236f1c5a-6ec3-488d-ab74-6b4bed13f7f0.jpg"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOrder = (bouquetName: string) => {
    setFormData({
      ...formData,
      bouquet: bouquetName
    });
    scrollToSection('order-form');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо за заказ! Мы свяжемся с вами в ближайшее время.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100">
        <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              FlyFlower
            </div>
            <ul className="hidden md:flex space-x-8">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Главная
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('catalog')}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Каталог
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Карта
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('order-form')}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Заказать
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl">
              <img 
                src="/img/2220a334-d19d-4112-a51d-619886896c1b.jpg" 
                alt="Букет цветов" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-gray-800 mb-6 tracking-tight">
            FlyFlower
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Создаем незабываемые моменты с помощью изысканных букетов. 
            Каждый цветок выбран с любовью для ваших особенных дней.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('catalog')}
          >
            <Icon name="Heart" className="mr-2" size={20} />
            Выбрать букет
          </Button>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-12 md:py-20 px-4 md:px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Наши букеты
            </h2>
            <p className="text-lg text-gray-600">
              Выберите идеальный букет для любого случая
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {bouquets.map((bouquet) => (
              <Card key={bouquet.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={bouquet.image} 
                    alt={bouquet.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {bouquet.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {bouquet.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {bouquet.price}
                    </span>
                    <Button 
                      onClick={() => handleOrder(bouquet.name)}
                      className="rounded-full hover:shadow-lg transition-all duration-300"
                    >
                      <Icon name="ShoppingCart" className="mr-2" size={16} />
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order-form" className="py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Оформить заказ
            </h2>
            <p className="text-lg text-gray-600">
              Заполните форму, и мы свяжемся с вами для подтверждения заказа
            </p>
          </div>
          <Card className="p-4 md:p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Введите ваше имя"
                  required
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Номер телефона</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+7 (___) ___-__-__"
                  required
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bouquet">Название букета</Label>
                <Input
                  id="bouquet"
                  name="bouquet"
                  value={formData.bouquet}
                  onChange={handleInputChange}
                  placeholder="Выберите букет из каталога"
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Дата доставки</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="rounded-lg"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-lg py-3 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заказ
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Contact/Map Section */}
      <section id="contact" className="py-12 md:py-20 px-4 md:px-6 bg-white/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Мы находимся здесь
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="text-left space-y-6">
              <div className="flex items-center space-x-4">
                <Icon name="MapPin" size={24} className="text-primary" />
                <div>
                  <p className="font-semibold">Адрес</p>
                  <p className="text-gray-600">г. Москва, ул. Цветочная, 15</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Phone" size={24} className="text-primary" />
                <div>
                  <p className="font-semibold">Телефон</p>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Clock" size={24} className="text-primary" />
                <div>
                  <p className="font-semibold">Время работы</p>
                  <p className="text-gray-600">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Карта будет здесь</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 md:py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">FlyFlower</h3>
              <p className="text-gray-300">
                Создаем красоту и радость через искусство флористики
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>info@flyflower.ru</p>
                <p>г. Москва, ул. Цветочная, 15</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 FlyFlower. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FlyFlower;