import EventBus from "./EventBus";
import { handler, listener } from "./subscriber";

export const TEST_EVENT = "test_event";

EventBus.subscribe(TEST_EVENT, listener);
EventBus.subscribe(TEST_EVENT, handler);

EventBus.publish(TEST_EVENT, "test - 1");

EventBus.unsubscribe(TEST_EVENT, handler);

EventBus.publish(TEST_EVENT, "test - 2");
