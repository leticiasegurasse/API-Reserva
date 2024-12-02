import express from "express";
import cors from "cors";
import experienciaRoutes from "./routes/experienciaRoutes";
import usuarioRoutes from "./routes/usuarioRoutes";
import reservaRoutes from "./routes/reservaRoutes";
import avaliacaoRoutes from "./routes/avaliacaoRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/experiencias", experienciaRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/reservas", reservaRoutes);
app.use("/avaliacoes", avaliacaoRoutes);

export default app;
