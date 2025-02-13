import { Typography } from 'antd';
import React, { useState } from 'react';
const FAQ = () => {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (key) => {
    setOpenPanel(openPanel === key ? null : key);
  };

  const faqs = [
    {
      question: 'Стоимость вызова?',
      answer:
        'Стоимость вызова мастера - бесплатно! Вы платите только за выполненную работу.',
    },
    {
      question: 'Нужно ли мне самостоятельно закупать материалы?',
      answer:
        'Вы можете самостоятельно купить материалы, а также мы можем помочь в выборе или привезем свои.',
    },
    {
      question: 'В течение какого времени приезжает мастер?',
      answer:
        'Мастер выезжает к Вам в течение 30 минут. Либо к назначенному Вами времени.',
    },
    {
      question: 'Имеется ли у мастера весь нужный инструмент?',
      answer: 'Мастер приезжает к Вам со всем необходимым инструментом.',
    },
    {
      question: 'Как проходит оплата?',
      answer:
        'Оплата выполненных услуг происходит по их окончании. Когда вы полностью удовлетворены результатом!',
    },
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: '10px',
              borderBottom: '1px solid #ccc',
              borderTop: !index && '1px solid #ccc',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '27px 0',
              }}
            >
              <Typography.Text
                style={{
                  margin: 0,
                  // padding: '10px',
                  fontWeight: 600,
                  fontSize: 20,
                  width: '80%',
                  textAlign: 'left',
                  color: '#333333',
                }}
              >
                {faq.question}
              </Typography.Text>
              <button
                onClick={() => togglePanel(index)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '50px',
                  width: '40px',
                  height: '40px',
                  fontSize: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center', // Центрирует текст по горизонтали
                  transition: 'all 0.3s ease',
                  transform:
                    openPanel === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffc11e';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                +
              </button>
            </div>
            <div
              style={{
                overflow: 'hidden',
                maxHeight: openPanel === index ? '100px' : '0',
                transition: 'max-height 0.3s ease',
              }}
            >
              <p
                style={{
                  padding: '10px',
                  textAlign: 'left',
                  fontSize: 18,
                  fontWeight: 300,
                  color: '#33333',
                  // margin: 0,
                }}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
