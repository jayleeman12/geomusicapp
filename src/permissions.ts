import { check, request, RESULTS, Permission, Rationale } from 'react-native-permissions';


export enum PermissionRequest {
  IN_PROGRESS,
  DENIED,
  GRANTED,
  FAILED
}

export async function requestPermission(permission: Permission, rationale?: Rationale): Promise<boolean> {
    let permissionAllowed = (await check(permission)) === RESULTS.GRANTED;
    if (!permissionAllowed) {
        permissionAllowed = (await request(permission, rationale)) === RESULTS.GRANTED;
    }
    return Promise.resolve(permissionAllowed)
}