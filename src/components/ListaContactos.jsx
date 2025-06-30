import TarjetaContacto from './TarjetaContacto';
import './ListaContactos.css';

const ListaContactos = ({ contactos, soloActivos = false }) => {
  const filtrados = soloActivos ? contactos.filter(c => c.activo) : contactos;

  return (
    <div>
      <h2>Contactos ({filtrados.length})</h2>
      {filtrados.length === 0 ? (
        <p>No hay contactos disponibles.</p>
      ) : (
        filtrados.map(contacto => (
          <TarjetaContacto key={contacto.id} {...contacto} />
        ))
      )}
    </div>
  );
};

export default ListaContactos;
