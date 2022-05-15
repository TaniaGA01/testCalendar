import { reactive } from "vue";
export const pollOptions = reactive([
    {
        opId: `001`,
        name: "Activation réponses Oui / Non / Peut-être pour chaque réponse",
        type: "gratuit",
        active:false,
    },
    {
        opId: `002`,
        name: "Avoir des notification mail sur les activités du sondage",
        type: "gratuit",
        active:false,
    },
    {
        opId: `003`,
        name: "Limiter à une seule réponse par participant",
        type: "gratuit",
        active:false,
    },
    {
        opId: `004`,
        name: "Vote/opinion anonyme",
        type: "gratuit",
        active:false,
    },
    {
        opId: `005`,
        name: "Modifier / Supprimer les votes par le participant (y compris le sien)",
        type: "premium",
        active:false,
    },
    {
        opId: `006`,
        name: "Envoyer de rappels automatiques aux participants",
        type: "premium",
        active:false,
    },
    {
        opId: `007`,
        name: "Export des réponses",
        type: "premium",
        active:false,
    },
    {
        opId: `008`,
        name: "Sondage sans publicité",
        type: "premium",
        active:false,
    },
    {
        opId: `009`,
        name: "Ajouter plusieurs organisateurs",
        type: "premium",
        active:false,
    },
    {
        opId: `010`,
        name: "Ajout des commentaires des participants",
        type: "premium",
        active:false,
        options: {
            prive: false
        }
    },
    {
        opId: `011`,
        name: "Ajouter un logo au sondage",
        type: "premium",
        active:false,
        file: ''
        
    },
    {
        opId: `012`,
        name: "Ajouter une bannière",
        type: "premium",
        active:false,
        file: []
    },
]);
