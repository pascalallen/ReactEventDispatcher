# React Event Dispatcher

A lightweight event dispatcher for React.

## Installation

Use the package manager [yarn](https://classic.yarnpkg.com/lang/en/docs/install) to install @pascalallen/react-event-dispatcher.

```bash
yarn add @pascalallen/react-event-dispatcher
```

## Usage

### Dispatch

```typescript
import { DomainEvent, eventDispatcher } from '@pascalallen/react-event-dispatcher';

const event: DomainEvent = {
  name: 'USER_ADDED',
  data: {
    id: '01GQ7S8624BN2Q2S3HNZH5SGDJ'
  }
};

eventDispatcher.dispatch(event);
```

### Subscribe

```typescript
import { useEffect } from "react";
import { DomainEvent, useEvent } from '@pascalallen/react-event-dispatcher';

const userAddedEvent: DomainEvent | undefined = useEvent('USER_ADDED');

useEffect(() => {
  userAddedEvent?.id && console.log('User added');
}, [userAddedEvent]);
```
