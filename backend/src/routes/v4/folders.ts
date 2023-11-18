import express from "express";
const router = express.Router();
import { requireAuth} from "../../middleware";
import { foldersController } from "../../controllers/v4";
// import { AuthMode } from "../../variables";

router.post(
    "/",
    requireAuth({
        acceptedAuthModes: []
    }),
    foldersController.createFolder
);

router.get(
    "/",
    requireAuth({
        acceptedAuthModes: []
    }),
    foldersController.getFolders
);

router.patch(
    ":/folderName",
    requireAuth({
        acceptedAuthModes: []
    }),
    foldersController.updateFolder
);

router.delete(
    "/:folderName",
    requireAuth({
        acceptedAuthModes: []
    }),
    foldersController.deleteFolder
);

export default router;