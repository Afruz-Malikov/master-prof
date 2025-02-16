import { Typography, Button } from 'antd';
import { FaCheckCircle } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { TbHours24 } from 'react-icons/tb';
import { CiBoxes } from 'react-icons/ci';
import { GoRocket } from 'react-icons/go';
import { VscNoNewline } from 'react-icons/vsc';

const AdvertisementBanner = () => {
  const isSmall = useMediaQuery({ maxWidth: 576 });
  const isMiddle = useMediaQuery({ minWidth: 577, maxWidth: 992 });
  const isHigh = useMediaQuery({ minWidth: 993 });

  const getContent = () => {
    if (isSmall) {
      return {
        title: 'Услуги Электрика и сантехника',
        text: 'в Ташкенте и области',
        buttonText: 'Вызвать Мастера',
        listContent: [
          {
            icon: <TbHours24 style={{ width: 36, height: 36 }} />,
            text: 'Бесплатный выезд за 30 минут!',
          },
          {
            icon: <CiBoxes style={{ width: 36, height: 36 }} />,
            text: 'Обеспечиваем расходными материалами',
          },
          {
            icon: <GoRocket style={{ width: 36, height: 36 }} />,
            text: 'Всегда есть свободный мастер',
          },
        ],
      };
    } else {
      return {
        title: 'Электрика и сантехника под ключ в Ташкенте и области',
        text: (
          <>
            Закажите мастера прямо сейчас и{' '}
            <span
              style={{
                color: 'rgb(255, 193, 30)',
                fontSize: 34,
                fontWeight: 700,
              }}
            >
              получите скидку 15%
            </span>{' '}
            на все виды услуг!
          </>
        ),
        buttonText: 'Вызвать мастера',
        listContent: [
          {
            icon: (
              <FaCheckCircle
                style={{ color: 'rgb(255, 193, 30)', width: 20, height: 20 }}
              />
            ),
            text: 'Бесплатный выезд за 30 минут',
          },
          {
            icon: (
              <FaCheckCircle
                style={{ color: 'rgb(255, 193, 30)', width: 20, height: 20 }}
              />
            ),
            text: 'Обеспечиваем расходными материалами',
          },
          {
            icon: (
              <FaCheckCircle
                style={{ color: 'rgb(255, 193, 30)', width: 20, height: 20 }}
              />
            ),
            text: 'Всегда есть свободный мастер',
          },
        ],
      };
    }
  };

  const { title, text, buttonText, listContent } = getContent();

  return (
    <section
      style={{
        width: '100vw',
        padding: isSmall ? 20 : isMiddle ? 40 : 50,
        position: 'relative',
        backgroundImage: 'url(/banner_image.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'linear-gradient(to bottom, rgba(51, 51, 51, 0.6), rgba(51, 51, 51, 0.9))',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Typography.Title
          level={1}
          style={{
            color: 'white',
            fontWeight: 600,
            textAlign: 'left',
            maxWidth: isSmall ? 400 : 800,
            fontSize: isSmall ? 50 : 72,
            marginBottom: 40,
          }}
        >
          {title}{' '}
          <span
            style={{
              display: 'block',
              fontWeight: 400,
              maxWidth: isSmall ? 400 : 590,
              margin: '30px 0 20px 0',
              fontSize: 28,
              fontWeight: 300,
              color: 'white',
            }}
          >
            {text}
          </span>
        </Typography.Title>
        <div style={{ marginBottom: 20 }}>
          <Button
            type="default"
            href="tel:+998998885011"
            style={{
              position: 'relative',
              color: '#333333',
              fontWeight: '700',
              height: 60,
              width: 290,
              textAlign: 'left',
              border: 'none',
              backgroundColor: '#ffc11e',
              borderRadius: 10,
            }}
          >
            <img
              src="/plumber.png"
              alt=""
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                transform: 'translateY(-50%)',
                width: 66,
                height: 66,
              }}
            />
            {buttonText}
          </Button>
        </div>
        <div>
          <ul
            style={{
              paddingLeft: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '20px',
              maxWidth: isSmall && 300,
            }}
          >
            {listContent.map((item, index) => (
              <li
                key={index}
                style={{
                  listStyle: 'none',
                  color: 'white',
                  display: 'flex',
                  alignItems: isSmall ? 'center' : 'normal',
                }}
              >
                {item.icon}{' '}
                <span
                  style={{
                    marginLeft: 10,
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 600,
                  }}
                >
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdvertisementBanner;
