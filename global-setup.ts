// remove user-data folder
import { rmSync } from 'fs';

import path from 'path';

function globalSetup() {
    const userDataDir = path.resolve(__dirname, 'user-data');
    rmSync(userDataDir, { recursive: true, force: true });
}

export default globalSetup;
