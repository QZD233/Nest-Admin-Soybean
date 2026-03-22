import { SetMetadata } from '@nestjs/common';
import { METADATA_KEYS } from 'src/core/constants/metadata.constants';

export const RequireRole = (role: string) => SetMetadata(METADATA_KEYS.ROLE, role);
