import {useEffect, useState} from 'react';
import {DomainEvents} from '@/domain/constants/DomainEvents';
import {DomainEvent, eventMap$} from '@/services/event/eventDispatcher';

type EventState = {
  current?: DomainEvent;
};

const initialEventState: EventState = {};

const useEvent = (name: DomainEvents) => {
  const [current, setCurrent] = useState(initialEventState.current);

  useEffect(() => {
    const subscription = eventMap$.subscribe(eventData => {
      if (eventData === undefined) {
        return setCurrent(undefined);
      }
      if ((name === DomainEvents.ALL || name === eventData?.name) && current?.id !== eventData?.id) {
        setCurrent(eventData);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [current, name]);

  return current;
};

export default useEvent;
