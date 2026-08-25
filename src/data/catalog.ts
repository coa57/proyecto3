import type { ExtraService, Review, Room } from "../types/hospitality";

export const rooms: Room[] = [
  { id: "room-101", number: "101", type: "Doble Deluxe", floor: 1, capacity: 2, price: 280, status: "Disponible", garage: true, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85", description: "Una habitación luminosa y serena, diseñada para descansar con comodidad y estilo.", amenities: ["Cama Queen", "WiFi de alta velocidad", "Desayuno", "Baño privado"] },
  { id: "room-204", number: "204", type: "Suite Familiar", floor: 2, capacity: 4, price: 420, status: "Disponible", garage: true, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85", description: "Espacio amplio para compartir en familia, con dos ambientes y atención especial.", amenities: ["Dos ambientes", "WiFi", "Minibar", "Vista panorámica"] },
  { id: "room-305", number: "305", type: "Individual Ejecutiva", floor: 3, capacity: 1, price: 210, status: "Disponible", garage: false, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85", description: "Práctica, moderna y silenciosa: ideal para viajes de trabajo o escapadas personales.", amenities: ["Escritorio", "WiFi", "Aire acondicionado", "Café de cortesía"] },
  { id: "room-402", number: "402", type: "Suite Premium", floor: 4, capacity: 2, price: 520, status: "Mantenimiento", garage: true, image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85", description: "Nuestra estancia más exclusiva, con acabados premium y una experiencia memorable.", amenities: ["Sala privada", "Jacuzzi", "Desayuno", "Vista a la ciudad"] },
];
export const services: ExtraService[] = [
  { id: "breakfast", name: "Alimentación", icon: "☕", description: "Desayuno artesanal para cada huésped.", price: 45, active: true },
  { id: "transfer", name: "Transporte", icon: "✦", description: "Traslado seguro desde o hacia el aeropuerto.", price: 80, active: true },
  { id: "cleaning", name: "Limpieza extra", icon: "✧", description: "Servicio de limpieza adicional a solicitud.", price: 35, active: true },
  { id: "wellness", name: "Bienestar", icon: "◌", description: "Acceso a la zona de relajación y masajes.", price: 95, active: true },
  { id: "wifi", name: "WiFi Premium", icon: "⌁", description: "Conexión de alta velocidad para todos tus dispositivos.", price: 20, active: true },
];
export const reviews: Review[] = [
  { id: "review-1", userId: "guest", name: "María Fernanda", rating: 5, comment: "Una atención impecable, habitación hermosa y un descanso total.", date: "12 ago. 2026", visible: true },
  { id: "review-2", userId: "guest", name: "Carlos R.", rating: 5, comment: "El lugar perfecto para una visita de trabajo. Todo muy cuidado.", date: "04 ago. 2026", visible: true },
  { id: "review-3", userId: "guest", name: "Andrea López", rating: 4, comment: "Muy cómodo, tranquilo y con un desayuno delicioso.", date: "28 jul. 2026", visible: true },
];
