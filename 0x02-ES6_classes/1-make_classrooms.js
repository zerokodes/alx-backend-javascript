import ClassRoom from './0-classroom';
/**
 * Creates an array of ClassRoom with a specific size
 * @return an array of ClassRoom
 */
export default function initializeRooms() {
    return [19, 20, 34].map((size) => new ClassRoom(size));
}