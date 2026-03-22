import { SetMetadata } from '@nestjs/common';
import { METADATA_KEYS } from 'src/core/constants/metadata.constants';

export const RequirePermission = (permission: string) => SetMetadata(METADATA_KEYS.PERMISSION, permission);
