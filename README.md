# React Event Dispatcher

A lightweight event dispatcher for React.

## Installation

Use the package manager [npm](https://nodejs.org/en/download/) to install @pascalallen/react-event-dispatcher.

```bash
npm i @pascalallen/react-event-dispatcher
```

## Usage

### Dispatch

```typescript
import eventDispatcher from "./eventDispatcher";

eventDispatcher.dispatch({
  name: 'USER_ADDED',
  data: {
      id: '01GQ7S8624BN2Q2S3HNZH5SGDJ'
  }
});
```

### Subscribe

```typescript
import {useEffect} from "react";
import useEvent from "./useEvents";

const userAddedEvent = useEvent('USER_ADDED');

useEffect(() => {
    userAddedEvent?.id && console.log('User added');
}, [userAddedEvent]);
```
