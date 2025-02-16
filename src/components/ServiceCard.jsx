import { Card, Button, Typography } from 'antd';
import { useMediaQuery } from 'react-responsive';
const ServiceCard = ({ img, price, title, description }) => {
  const isSmall = useMediaQuery({ maxWidth: 990 });
  return (
    <Card
      style={{
        maxWidth: 360,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        position: 'relative',
      }}
    >
      <img src={img} style={{ width: '100%' }} />
      <span
        style={{
          color: '#f0b105',
          fontSize: isSmall ? 20 : 30,
          fontWeight: 700,
        }}
      >
        от {price}
      </span>
      <span
        style={{
          fontWeight: 400,
          fontSize: 10,
          position: 'absolute',
          width: 50,
          height: 50,
          right: 0,
          color: 'white',
          top: 0,
          textAlign: 'center',
          background: '#ff4a4a',
          borderRadius: 50,
          padding: '16px 10px',
        }}
      >
        - 15%
      </span>
      <Typography.Title
        style={{
          fontSize: isSmall ? 18 : 20,
          color: '#333333',
          marginTop: 12,
          textTransform: 'uppercase',
        }}
      >
        {title}
      </Typography.Title>
      <Typography.Text
        style={{
          color: '#333333',
          fontSize: 15,
          marginTop: 8,
          fontWeight: 300,
        }}
      >
        {description}
      </Typography.Text>
      <Button
        type="default"
        href="tel:+998998885011"
        style={{
          color: '#333333',
          background: '#ffc11e',
          borderRadius: 10,
          width: '100%',
          height: 35,
          marginTop: 20,
        }}
      >
        Вызвать мастера
      </Button>
    </Card>
  );
};

export default ServiceCard;
