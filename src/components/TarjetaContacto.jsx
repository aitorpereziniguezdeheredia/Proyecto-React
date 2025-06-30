import './TarjetaContacto.css';

const TarjetaContacto = ({ nombre, email, telefono, activo, avatar }) => {
  return (
    <div className={`tarjeta-contacto ${activo ? 'activo' : 'inactivo'}`}>
      <img src={avatar} alt={`Avatar de ${nombre}`} className="avatar" />
      <div className="info">
        <h3>{nombre} {activo ? '🟢' : '🔴'}</h3>
        <p>Email: {email}</p>
        <p>Teléfono: {telefono}</p>
      </div>
    </div>
  );
};

export default TarjetaContacto;