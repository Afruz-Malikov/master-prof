import { useState } from 'react';
import {
  Layout,
  Menu,
  Button,
  Drawer,
  Flex,
  Typography,
  Carousel,
  Card,
  Steps,
  Tabs,
} from 'antd';

import {
  MenuOutlined,
  CloseOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import './styles/header.css';
import AdvertisementBanner from './components/AdvetiseBanner';
import { IoMdCheckboxOutline } from 'react-icons/io';
import ServiceCard from './components/ServiceCard';
import AdvantageCard from './components/AdvantageCard';
import ProfCard from './components/ProfCard';
const { Header, Content, Footer } = Layout;
import FAQ from './components/FAQ';
import { Link } from 'react-scroll';

const menuItems = [
  {
    key: '1',
    label: (
      <Link to="benefits" smooth={true} duration={500}>
        Преимущества
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to="plumbing" smooth={true} duration={500}>
        Сантехника
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link to="about_us" smooth={true} duration={500}>
        О нас
      </Link>
    ),
  },
  {
    key: '4',
    label: (
      <Link to="contacts" smooth={true} duration={500}>
        Контакты
      </Link>
    ),
  },
];
const { Step } = Steps;
const services = [
  {
    price: '100 000 cум',
    title: 'Установка сифона',
    description:
      'Мы оказываем услуги по монтажу, замене, ремонту и переносу любой сантехники',
    bottom_description: 'Наши мастера справятся с любой задачей!',
  },
  {
    price: '150 000 cум',
    title: 'Замена смесителя',
    description:
      'Опыт показывает, что монтаж, осуществляемый нашими специалистами, длится в два раза короче по времени, снижает затраты и дает возможность комфортно пользоваться ванной в течение многих лет.',
  },
  {
    price: '200 000 cум',
    title: 'Прочистка канализации',
    description:
      'Если возник засор, прочистка труб бытовым вантузом не поможет. Обратитесь к нам - наши мастера используют разные способы и оборудование, учитывая особенности объекта и степень засорения.',
  },
  {
    price: '250 000 cум',
    title: 'Установка канализации',
    description:
      'Заменим старый унитаз на новый/отремонтируем или проведем установку инсталляции "под ключ"',
  },
  {
    price: '65 000 cум',
    title: 'Монтаж  гвс хвс',
    description:
      'Если вам необходимо поменять трубы водоснабжения в квартире или частном доме, поручите это опытным профессионалам нашей компании. Выполним разводку трубопроводов любой сложности и гарантируем абсолютную безопасность эксплуатации водопровода для вас и ваших соседей.',
  },
];
const about = [
  {
    title: '5+ лет',
    description: 'Сантехники и электрики с опытом минимум от 5 лет',
  },
  {
    title: 'Гибкость',
    description: 'Работаем с юридическими и физичискими лицами',
  },
  {
    title: '1 час',
    description: 'Приезжаем за 1 час',
  },
  {
    title: 'Гарантия',
    description: 'Даем гарантию за выполненную работу',
  },
  {
    title: '>100',
    description: 'Положительных отзывов ежемесячно',
  },
  {
    title: '0 СУМ',
    description: 'Бесплатный выезд. В случае выполнения заказа',
  },
];
const steps = [
  {
    title: 'Принимаем заявку',
    description:
      'Вы позвонили по номеру, оставили заявку на сайте или написали в Telegram',
  },
  {
    title: 'Согласовываем',
    description: 'Согласовали стоимость по телефону, место и время',
  },
  {
    title: 'Выполняем работу',
    description:
      'Мастер приезжает в оговоренное время, составляет договор и выполняет работу',
  },
  {
    title: 'Проверяете и оплачиваете',
    description:
      'Вы проверяете выполненную мастером работу и производите оплату',
  },
];
const garants = [
  {
    title: 'ГАРАНТИЯ 3 ГОДА',
    description:
      'О качестве выполненных работ и материалов лучше всего говорит длительная гарантия. Наша гарантия распространяется на 3 года.',
  },
  {
    title: 'СКОРОСТЬ',
    description:
      'Мы понимаем, как ценно Ваше время, поэтому предоставляем услуги по работе с сантехникой в день обращения.',
  },
  {
    title: 'РАБОТАЕМ СО СВОИМ МАТЕРИАЛОМ',
    description:
      'Мы всегда готовы помочь в выборе материалов для ремонта и отделки. В случае необходимости все купим и привезем сами.',
  },
  {
    title: 'МИНИМАЛЬНЫЕ ЦЕНЫ',
    description:
      'У нас удобное ценообразование за счет того, что у нас нет офиса и дополнительных расходов на его содержание.',
  },
];
const regions = [
  'Алмазар',
  'Якасарай',
  'Мирабад',
  'Сергели',
  'Учтепа',
  'Чиланзао',
  'Шайхантаур',
  'Юнсабад',
  'Бектемир',
  'Янгихает',
  'Яшнабад',
  'Зангиота',
  'Кибрай',
  'Чирчик',
  'Алмазар',
  'Мирзо-Улугбек',
];
function App() {
  const isSmall = useMediaQuery({ maxWidth: 576 });
  const isMiddle = useMediaQuery({ minWidth: 577, maxWidth: 1440 });
  const isHigh = useMediaQuery({ minWidth: 993 });
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 990 });

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  const headerContent = (
    <>
      <div
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#ffc11e',
          marginBottom: 30,
        }}
      >
        Master Profi
      </div>
      {/* Список вместо Menu */}
      <ul
        style={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'start',
          flexDirection: 'column',
          listStyleType: 'none',
          flexWrap: 'wrap',
          marginBottom: 30,
          gap: 20,
        }}
        className="desktop-menu"
      >
        {menuItems.map((item) => (
          <li key={item.key} onClick={() => setIsOpen(false)}>
            {item.label}
          </li>
        ))}
      </ul>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 10,
        }}
      >
        <span
          style={{
            color: 'rgb(255, 193, 30)',
            fontSize: 18,
            fontWeight: 800,
            marginRight: 20,
            whiteSpace: 'nowrap',
          }}
        >
          +998-95-405-0303
        </span>
        <Button
          type="primary"
          href="tel:+998954050303"
          style={{
            background: '#ffc11e',
            // borderColor: '#ffc11e',
            marginRight: 10,
            height: 40,
            flexShrink: 0,
          }}
        >
          <span style={{ color: 'white' }}>Заказать мастера 24/7</span>
        </Button>
      </div>
    </>
  );
  const servicesCard = services.map((item, index) => {
    return (
      <ServiceCard
        img={`/card${index + 1}.jpeg`}
        description={item.description}
        title={item.title}
        price={item.price}
        key={index}
        bottom_text={item.bottom_description ?? ''}
      />
    );
  });
  const aboutUsAdvantages = about.map((item, index) => {
    return (
      <AdvantageCard
        index={index + 1}
        key={index}
        description={item.description}
        title={item.title}
      />
    );
  });
  const tabs = [
    {
      key: '1',
      label: 'Сантехника',
      children: <div className="tab-content">{servicesCard}</div>,
    },
  ];
  return (
    <Layout>
      {!isMobile && (
        <Header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'white',
            padding: '0 20px',
            position: 'relative',
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#ffc11e',
            }}
          >
            Master Profi
          </div>
          {/* Список вместо Menu */}
          <ul
            style={{
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'start',
              listStyleType: 'none',
              flexWrap: 'wrap',
              gap: 20,
            }}
            className="desktop-menu"
          >
            {menuItems.map((item) => (
              <li key={item.key}>{item.label}</li>
            ))}
          </ul>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 10,
            }}
          >
            <span
              style={{
                color: 'rgb(255, 193, 30)',
                fontSize: 18,
                fontWeight: 800,
                marginRight: 20,
                whiteSpace: 'nowrap',
              }}
            >
              +998-95-405-0303
            </span>
            <Button
              type="primary"
              href="tel:+998954050303"
              style={{
                background: '#ffc11e',
                // borderColor: '#ffc11e',
                marginRight: 10,
                height: 40,
                flexShrink: 0,
              }}
            >
              <span style={{ color: 'white' }}>Заказать мастера 24/7</span>
            </Button>
          </div>
        </Header>
      )}

      {isMobile && (
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: 20 }} />}
          onClick={toggleDrawer}
          style={{
            fontSize: 40,
            position: 'fixed',
            top: 20,
            right: 20,
            width: 48,
            height: 48,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 165, 0, 0.8)',
            border: 'none',
            opacity: 0.5,
            borderRadius: '50%',
          }}
        />
      )}

      <Drawer
        placement="right"
        closable={false}
        onClose={toggleDrawer}
        open={isOpen}
      >
        <Button
          type="text"
          icon={<CloseOutlined />}
          onClick={toggleDrawer}
          style={{ fontSize: 24, marginBottom: 20 }}
        />
        {headerContent}
      </Drawer>

      <Content
        style={{
          backgroundColor: 'white',
        }}
      >
        {/* ooo */}
        <AdvertisementBanner />
        {/* ooo */}
        <section
          style={{
            width: '100vw',
            padding: isSmall ? 20 : 50,
            backgroundColor: '#f5f5f5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ul
            style={{
              display: 'flex',
              justifyContent: isSmall ? 'center' : 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              width: '100%',
              gap: isSmall ? 15 : 0,
            }}
          >
            {['Квартиры', 'Офисы', 'Дома', 'Коттеджи'].map((text) => (
              <li
                key={text}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: isSmall ? '40%' : 'auto',
                  justifyContent: 'flex-start',
                }}
              >
                <IoMdCheckboxOutline
                  style={{
                    width: 30,
                    height: 30,
                    color: '#ffc11e',
                    marginRight: 10,
                  }}
                />
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                  }}
                >
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </section>
        {/* ooo */}
        <section
          style={{
            width: '100vw',
            padding: isSmall ? 20 : isMiddle ? 40 : 50,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography.Text
            style={{
              fontSize: isSmall ? 19 : 21,
              fontWeight: 400,
              textAlign: 'center',
              marginBottom: 30,
            }}
          >
            Закажите мастера прямо сейчас и{' '}
            <span
              style={{
                color: 'rgb(255, 193, 30)',
                fontSize: isSmall ? 19 : 21,
                fontWeight: 700,
              }}
            >
              получите скидку 15%
            </span>{' '}
            на все виды услуг!{' '}
            <span
              style={{
                fontWeight: 300,
                marginTop: 20,
                fontSize: isSmall ? 19 : 21,
                display: 'block',
              }}
            >
              Будем у Вас через 30 минут!
            </span>
          </Typography.Text>
          <Button
            href="tel:+998954050303"
            style={{
              color: '#333333',
              fontWeight: '700',
              height: 60,
              width: 290,
              textAlign: 'left',
              border: 'none',
              background: '#ffc11e',
              borderRadius: 10,
              color: 'white',
            }}
          >
            <a>Вызвать мастера на дом</a>
          </Button>
        </section>
        {/* oo */}
        <section
          style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            background: '#FFC107',
            padding: '10px 0',
            display: 'flex',
          }}
        >
          <ul className="marquee">
            <ul className="marquee-content">
              <li>Приедем за 30 минут!</li>
              <li>Выезд бесплатно</li>
              <li>Работаем 24/7</li>
              <li>Приедем за 30 минут!</li>
              <li>Выезд бесплатно</li>
              <li>Работаем 24/7</li>
            </ul>
            <ul className="marquee-content">
              <li>Приедем за 30 минут!</li>
              <li>Выезд бесплатно</li>
              <li>Работаем 24/7</li>
              <li>Приедем за 30 минут!</li>
              <li>Выезд бесплатно</li>
              <li>Работаем 24/7</li>
            </ul>
            <ul className="marquee-content">
              <li>Приедем за 30 минут!</li>
              <li>Выезд бесплатно</li>
              <li>Работаем 24/7</li>
              <li>Приедем за 30 минут!</li>
              <li>Выезд бесплатно</li>
              <li>Работаем 24/7</li>
            </ul>
            <ul className="marquee-content">
              <li>Приедем за 30 минут!</li>
              <li>Выезд бесплатно</li>
              <li>Работаем 24/7</li>
              <li>Приедем за 30 минут!</li>
              <li>Выезд бесплатно</li>
              <li>Работаем 24/7</li>
            </ul>
            <ul className="marquee-content">
              <li>Приедем за 30 минут!</li>
              <li>Выезд бесплатно</li>
              <li>Работаем 24/7</li>
              <li>Приедем за 30 минут!</li>
              <li>Выезд бесплатно</li>
              <li>Работаем 24/7</li>
            </ul>
          </ul>
        </section>
        {/* services */}
        <section
          id="plumbing"
          style={{
            width: '100vw',
            padding: isSmall ? 20 : isMiddle ? 40 : 50,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography.Title
            style={{
              textAlign: 'center',
              color: 'rgb(97, 95, 95)',
              fontSize: 28,
              marginBottom: 40,
            }}
          >
            Выполняем все виды <br />
            сантехнических и электромонтажных работ
          </Typography.Title>
          <Typography.Text
            style={{
              textAlign: 'center',
              color: 'rgb(51, 51, 51)',
              fontSize: 20,
              maxWidth: 600,
            }}
          >
            Мы оказываем услуги по монтажу, замене, ремонту и переносу любой
            сантехники и электрики. Наши мастера справятся с любой задачей!
          </Typography.Text>
          <Tabs items={tabs} tabPosition="top" />
        </section>
        {/* about us */}
        <section
          id="about_us"
          style={{
            width: '100vw',
            padding: isSmall ? 20 : isMiddle ? 40 : 50,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <hr
            style={{
              backgroundColor: '#ffc11e', // Меняем фон линии
              opacity: 0.9,
              height: 1,
              width: '100%',
              border: 'none',
              marginBottom: 28, // Убираем стандартную границу, которая может мешать
            }}
          />
          <Typography.Title
            style={{
              fontSize: 42,
              color: 'rgb(97, 95, 95)',
              marginBottom: 80,
              fontWeight: 600,
            }}
          >
            О компании
          </Typography.Title>
          <div
            style={{
              display: 'flex',
              width: '70%',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {aboutUsAdvantages}
          </div>
          <hr
            style={{
              backgroundColor: '#ffc11e',
              opacity: 0.9,
              height: 1,
              width: '100%',
              border: 'none',
              marginTop: 28,
            }}
          />
        </section>
        {/* how we works */}
        <section
          style={{
            width: '100vw',
            padding: isSmall ? 20 : isMiddle ? 40 : 50,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          id="benefits"
        >
          <Typography.Title
            style={{
              fontSize: isSmall ? 38 : 42,
              color: 'rgb(97, 95, 95)',
              marginBottom: 20,
              fontWeight: 600,
              marginBottom: 50,
            }}
          >
            Как мы работаем
          </Typography.Title>
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              width: '100%',
            }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  position: 'relative',
                  flex: 1,
                  height: isMobile ? 'auto' : '20vh',
                  marginBottom: isMobile ? '20px' : '0',
                }}
              >
                {/* Номер шага */}
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#ffc11e',
                    color: 'white',
                    borderRadius: '50%',
                    margin: '0 auto',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {index + 1}
                </div>

                {/* Линия между шагами */}
                {!isMobile && index < steps.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '19px',
                      left: '50%',
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#ffc11e',
                      zIndex: 1,
                    }}
                  />
                )}

                {/* Текст под шагом */}
                <div style={{ marginTop: '12px' }}>
                  <h3
                    style={{
                      fontWeight: '600',
                      color: 'rgb(97, 95, 95)',
                      marginBottom: '8px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '16px',
                      color: '#615f5f',
                      fontWeight: 300,
                      maxWidth: '260px',
                      margin: '0 auto',
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* about master */}
        <section
          style={{
            width: '100vw',
            padding: isSmall ? 20 : isMiddle ? 40 : 50,
            display: 'flex',
            flexDirection: (isMiddle || isSmall) && 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 60,
          }}
        >
          <img
            src="/human.png"
            style={{
              width: isSmall ? 250 : isMiddle ? 300 : 579,
              height: isSmall ? 321 : isMiddle ? 400 : 762,
              marginBottom: 20,
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <Typography.Title
              style={{
                fontSize: isSmall ? 38 : 42,
                color: 'rgb(97, 95, 95)',
                textAlign: (isMiddle || isMobile) && 'center',
                marginBottom: 20,
                fontWeight: 600,
                marginBottom: 50,
              }}
            >
              Доверьте ремонт профессионалам
            </Typography.Title>
            <div
              style={{
                display: 'flex',
                gap: 20,
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              {garants.map((item, index) => (
                <ProfCard
                  description={item.description}
                  title={item.title}
                  isMobile={isMobile}
                  isMiddle={isMiddle}
                  key={index}
                />
              ))}
            </div>
            <div
              style={{
                width: '100%',
                textAlign: isMiddle ? 'center' : 'right',
                display: isMobile && 'none',
              }}
            >
              <Button
                href="tel:+998954050303"
                style={{
                  color: '#333333',
                  fontWeight: '700',
                  height: 60,
                  width: 290,
                  marginTop: 30,
                  textAlign: 'left',
                  border: 'none',
                  background: '#ffc11e',
                  borderRadius: 10,
                  color: 'white',
                }}
              >
                <a>Вызвать мастера</a>
              </Button>
            </div>
          </div>
        </section>
        {/* zones */}
        <section
          style={{
            width: '100vw',
            padding: isSmall ? 20 : isMiddle ? 40 : 50,
            marginBottom: 60,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography.Title
            style={{
              fontSize: isSmall ? 28 : 42,
              color: 'rgb(97, 95, 95)',
              marginBottom: 20,
              fontWeight: 600,
              marginBottom: 50,
              textAlign: 'center',
            }}
          >
            Работаем во всех районах Ташкента и Области
          </Typography.Title>
          <div
            style={{ display: 'flex', flexWrap: 'wrap', gap: 20, width: '80%' }}
          >
            {regions.map((item, index) => (
              <div
                style={{
                  color: '#615f5f',
                  borderRadius: 30,
                  maxWidth: 200,
                  maxHeight: 45,
                  backgroundColor: '#ffc11e',
                  // textAlign: 'center',
                  padding: '12px 16px',
                }}
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </section>
        {/* answers */}
        <section
          style={{
            width: '100vw',
            padding: isSmall ? 20 : isMiddle ? 40 : 50,
            marginBottom: 60,
            display: 'flex',
            backgroundColor: '#f5f5f5',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography.Title
            style={{
              fontSize: isSmall ? 38 : 42,
              color: 'rgb(97, 95, 95)',
              textAlign: (isMiddle || isMobile) && 'center',
              marginBottom: 20,
              fontWeight: 600,
              marginBottom: 50,
            }}
          >
            Ответы на Ваши вопросы
          </Typography.Title>
          <FAQ />
        </section>
      </Content>

      <Footer
        id="contacts"
        style={{
          textAlign: 'center',
          padding: '40px 20px',
          backgroundColor: 'white',
        }}
      >
        <Typography.Title
          style={{
            fontSize: isSmall ? 38 : 42,
            color: 'rgb(97, 95, 95)',
            textAlign: (isMiddle || isMobile) && 'center',
            marginBottom: 20,
            fontWeight: 600,
            marginBottom: 45,
          }}
        >
          Контакты
        </Typography.Title>
        <a href="tel:+998954050303" style={{ fontSize: 25, fontWeight: 700 }}>
          +998 95 405 03 03
        </a>
        <p style={{ fontSize: 25, fontWeight: 700, marginBottom: 35 }}>
          ronyyanc@mail.ru
        </p>
        <p
          style={{
            fontSize: 18,
            fontWeight: 300,
            color: 'black',
          }}
        >
          ООО "Bigmaster santex servis"
        </p>
        <p
          style={{
            fontSize: 18,
            fontWeight: 300,
            color: 'black',
          }}
        >
          ИНН 311543520
        </p>
        <p
          style={{
            fontSize: 18,
            fontWeight: 300,
            color: 'black',
          }}
        >
          г. Ташкент
        </p>
        <p
          style={{
            fontSize: 18,
            fontWeight: 300,
            color: 'black',
          }}
        >
          Мирободский район, Массив Куйлюк, 1
        </p>
        <p
          style={{
            fontSize: 18,
            fontWeight: 300,
            color: 'black',
          }}
        >
          ул. Муниса, 21
        </p>
      </Footer>
    </Layout>
  );
}

export default App;
// Sorry for bulls##t code
