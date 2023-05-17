import { fromJs } from 'immutable';

export default function getImmutableObject(object) {
    return fromJs(object);
}
