import { rooms as seedRooms, services as seedServices } from "../data/catalog";
import { storageService } from "../services/storageService";
import type { ExtraService, Reservation, Room } from "../types/hospitality";

const get = <T,>(key: string, seed: T): T => { const stored = storageService.get<T>(key); if (stored) return stored; storageService.set(key, seed); return seed; };
const set = <T,>(key: string, value: T) => storageService.set(key, value);
export const hospitalityRepository = {
  rooms: () => get<Room[]>("stay_rooms", seedRooms), services: () => get<ExtraService[]>("stay_services", seedServices), reservations: () => get<Reservation[]>("stay_reservations", []),
  saveRooms: (value: Room[]) => set("stay_rooms", value), saveServices: (value: ExtraService[]) => set("stay_services", value),
  saveReservation(reservation: Reservation) { const all = this.reservations(); set("stay_reservations", [reservation, ...all]); },
  updateReservation(reservation: Reservation) { set("stay_reservations", this.reservations().map((item) => item.id === reservation.id ? reservation : item)); },
  isAvailable(roomId: string, checkIn: string, checkOut: string) { return !this.reservations().some((r) => r.roomId === roomId && r.status !== "Cancelada" && checkIn < r.checkOut && checkOut > r.checkIn); },
};
