import useEvent from '@hooks/useEvents';
import eventDispatcher, { DomainEvent, eventMap$ } from '@services/event/eventDispatcher';

export type { DomainEvent };

export { useEvent, eventDispatcher, eventMap$ };
