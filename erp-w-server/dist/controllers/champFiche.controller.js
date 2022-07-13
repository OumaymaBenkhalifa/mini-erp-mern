"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteChampTN = exports.updateChampTN = exports.getFicheTN = exports.addChampTN = exports.getAllChampsTN = exports.deleteChampFR = exports.updateChampFR = exports.getFicheFR = exports.addChampFR = exports.getAllChampsFR = void 0;
const champFicheFR_model_1 = require("../models/champFicheFR.model");
const champFicheTN_model_1 = require("../models/champFicheTN.model");
const fichePaix_model_1 = require("../models/fichePaix.model");
const fichePaix_model_2 = require("../models/fichePaix.model");
const getAllChampsFR = async (req, res) => {
    try {
        const champ = await champFicheFR_model_1.ChampFicheFR.find();
        return res.send(champ);
    }
    catch (err) {
        res.send('pas de champs');
    }
};
exports.getAllChampsFR = getAllChampsFR;
const addChampFR = async (req, res) => {
    var _a;
    const fiche = await fichePaix_model_1.FicheFR.findOne({ _id: req.params.id });
    const { libelle, baseSalariale, taux, basePatronale, tauxPatronal } = req.body;
    if (fiche) {
        const salariale = (baseSalariale * taux) / 100;
        const patronal = (basePatronale * tauxPatronal) / 100;
        const champ = new champFicheFR_model_1.ChampFicheFR({
            libelle: libelle,
            baseSalariale: baseSalariale,
            taux: taux,
            resultatSalarial: salariale,
            basePatronale: basePatronale,
            tauxPatronal: tauxPatronal,
            resultatPatronal: patronal,
            Fiche: fiche,
        });
        champ.populate('Fiche');
        try {
            const savedchamp = await champ.save();
            (_a = fiche === null || fiche === void 0 ? void 0 : fiche.ChampFiche) === null || _a === void 0 ? void 0 : _a.push(savedchamp);
            fiche.save();
            res.send(savedchamp);
        }
        catch (err) {
            res.status(400).send('il y a une erreur');
        }
    }
    else {
        res.status(400).send('pas de fiche avec cet id');
    }
};
exports.addChampFR = addChampFR;
const getFicheFR = async (req, res) => {
    const foundchamp = await champFicheFR_model_1.ChampFicheFR.find({ _id: req.params.id }).populate('Fiche');
    res.json(foundchamp[0].Fiche);
};
exports.getFicheFR = getFicheFR;
const updateChampFR = async (req, res) => {
    const champ = await champFicheFR_model_1.ChampFicheFR.findOne({ _id: req.params.id });
    const fiche = await fichePaix_model_1.FicheFR.findOne({ _id: champ === null || champ === void 0 ? void 0 : champ.Fiche });
    const { libelle, baseSalariale, taux, basePatronale, tauxPatronal } = req.body;
    if (champ) {
        const salariale = (baseSalariale * taux) / 100;
        const patronal = (basePatronale * tauxPatronal) / 100;
        champFicheFR_model_1.ChampFicheFR.updateOne({ _id: champ._id }, {
            libelle: libelle,
            baseSalariale: baseSalariale,
            taux: taux,
            resultatSalarial: salariale,
            basePatronale: basePatronale,
            tauxPatronal: tauxPatronal,
            resultatPatronal: patronal,
        }, function (err, data) {
            if (err) {
                return res.status(400).send('erreur');
            }
            else {
                return res.status(200).send('champ updated successfully');
            }
        });
        try {
            await champ.save();
        }
        catch (err) {
            res.status(400);
        }
    }
    else {
        return res.status(400).send('champ introuvable');
    }
};
exports.updateChampFR = updateChampFR;
const deleteChampFR = async (req, res) => {
    var _a, _b;
    const champ = await champFicheFR_model_1.ChampFicheFR.findOne({ _id: req.params.id });
    if (champ) {
        await champFicheFR_model_1.ChampFicheFR.deleteOne({ _id: champ._id });
        const fiche = await fichePaix_model_1.FicheFR.findOne({ _id: champ.Fiche });
        const ind = (_a = fiche === null || fiche === void 0 ? void 0 : fiche.ChampFiche) === null || _a === void 0 ? void 0 : _a.indexOf(champ);
        if (ind)
            (_b = fiche === null || fiche === void 0 ? void 0 : fiche.ChampFiche) === null || _b === void 0 ? void 0 : _b.splice(ind, 1);
        fiche === null || fiche === void 0 ? void 0 : fiche.save();
        return res.status(200).send('champ deleted');
    }
    else {
        return res.status(404).send('no champ with id: ' + req.params.id);
    }
};
exports.deleteChampFR = deleteChampFR;
const getAllChampsTN = async (req, res) => {
    try {
        const champ = await champFicheTN_model_1.ChampFicheTN.find();
        return res.send(champ);
    }
    catch (err) {
        res.send('pas de champs');
    }
};
exports.getAllChampsTN = getAllChampsTN;
const addChampTN = async (req, res) => {
    var _a;
    const fiche = await fichePaix_model_2.FicheTN.findOne({ _id: req.params.id });
    const { libelle, nombre, gains, retenues } = req.body;
    if (fiche) {
        const champ = new champFicheTN_model_1.ChampFicheTN({
            libelle: libelle,
            nombre: nombre,
            gains: gains,
            retenues: retenues,
            Fiche: fiche,
        });
        champ.populate('Fiche');
        try {
            const savedchamp = await champ.save();
            (_a = fiche === null || fiche === void 0 ? void 0 : fiche.ChampFiche) === null || _a === void 0 ? void 0 : _a.push(savedchamp);
            fiche.save();
            res.send(savedchamp);
        }
        catch (err) {
            res.status(400).send('il y a une erreur');
        }
    }
    else {
        res.status(400).send('pas de fiche avec cet id');
    }
};
exports.addChampTN = addChampTN;
const getFicheTN = async (req, res) => {
    const foundchamp = await champFicheTN_model_1.ChampFicheTN.find({ _id: req.params.id }).populate('Fiche');
    res.json(foundchamp[0].Fiche);
};
exports.getFicheTN = getFicheTN;
const updateChampTN = async (req, res) => {
    const champ = await champFicheTN_model_1.ChampFicheTN.findOne({ _id: req.params.id });
    const fiche = await fichePaix_model_2.FicheTN.findOne({ _id: champ === null || champ === void 0 ? void 0 : champ.Fiche });
    const { libelle, nombre, gains, retenues } = req.body;
    if (champ) {
        champFicheTN_model_1.ChampFicheTN.updateOne({ _id: champ._id }, {
            libelle: libelle,
            nombre: nombre,
            gains: gains,
            retenues: retenues,
        }, function (err, data) {
            if (err) {
                return res.status(400).send('erreur');
            }
            else {
                return res.status(200).send('champ updated successfully');
            }
        });
        try {
            await champ.save();
        }
        catch (err) {
            res.status(400);
        }
    }
    else {
        return res.status(400).send('champ introuvable');
    }
};
exports.updateChampTN = updateChampTN;
const deleteChampTN = async (req, res) => {
    var _a, _b;
    const champ = await champFicheTN_model_1.ChampFicheTN.findOne({ _id: req.params.id });
    if (champ) {
        await champFicheTN_model_1.ChampFicheTN.deleteOne({ _id: champ._id });
        const fiche = await fichePaix_model_2.FicheTN.findOne({ _id: champ.Fiche });
        const ind = (_a = fiche === null || fiche === void 0 ? void 0 : fiche.ChampFiche) === null || _a === void 0 ? void 0 : _a.indexOf(champ);
        if (ind)
            (_b = fiche === null || fiche === void 0 ? void 0 : fiche.ChampFiche) === null || _b === void 0 ? void 0 : _b.splice(ind, 1);
        fiche === null || fiche === void 0 ? void 0 : fiche.save();
        return res.status(200).send('champ deleted');
    }
    else {
        return res.status(404).send('no champ with id: ' + req.params.id);
    }
};
exports.deleteChampTN = deleteChampTN;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbXBGaWNoZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlcnMvY2hhbXBGaWNoZS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE0RDtBQUM1RCxxRUFBNEQ7QUFDNUQsK0RBQW9EO0FBQ3BELCtEQUFvRDtBQUk3QyxNQUFNLGNBQWMsR0FBRyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQy9DLElBQUk7UUFDRixNQUFNLEtBQUssR0FBRyxNQUFNLGlDQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQzNCO0FBQ0gsQ0FBQyxDQUFDO0FBUFcsUUFBQSxjQUFjLGtCQU96QjtBQUdLLE1BQU0sVUFBVSxHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7O0lBQzlELE1BQU0sS0FBSyxHQUFHLE1BQU0seUJBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVELE1BQU0sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUUvRSxJQUFJLEtBQUssRUFBRTtRQUNULE1BQU0sU0FBUyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMvQyxNQUFNLFFBQVEsR0FBRyxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDdEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxpQ0FBWSxDQUFDO1lB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QUdLLE1BQU0sYUFBYSxHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7O0lBQzlDLE1BQU0sS0FBSyxHQUFHLE1BQU0saUNBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLElBQUksS0FBSyxFQUFFO1FBQ1QsTUFBTSxpQ0FBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNqRCxNQUFNLEtBQUssR0FBRyxNQUFNLHlCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzFELE1BQU0sR0FBRyxHQUFHLE1BQUEsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFVBQVUsMENBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQUksR0FBRztZQUFFLE1BQUEsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFVBQVUsMENBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsSUFBSSxFQUFFLENBQUM7UUFDZCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQzlDO1NBQU07UUFDTCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbkU7QUFDSCxDQUFDLENBQUM7QUFaVyxRQUFBLGFBQWEsaUJBWXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbXBGaWNoZUZSIH0gZnJvbSAnLi4vbW9kZWxzL2NoYW1wRmljaGVGUi5tb2RlbCc7XG5pbXBvcnQgeyBDaGFtcEZpY2hlVE4gfSBmcm9tICcuLi9tb2RlbHMvY2hhbXBGaWNoZVROLm1vZGVsJztcbmltcG9ydCB7IEZpY2hlRlIgfSBmcm9tICcuLi9tb2RlbHMvZmljaGVQYWl4Lm1vZGVsJztcbmltcG9ydCB7IEZpY2hlVE4gfSBmcm9tICcuLi9tb2RlbHMvZmljaGVQYWl4Lm1vZGVsJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcblxuLy9nZXQgY2hhbXBzIGZpY2hlIEZSXG5leHBvcnQgY29uc3QgZ2V0QWxsQ2hhbXBzRlIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjaGFtcCA9IGF3YWl0IENoYW1wRmljaGVGUi5maW5kKCk7XG4gICAgcmV0dXJuIHJlcy5zZW5kKGNoYW1wKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnNlbmQoJ3BhcyBkZSBjaGFtcHMnKTtcbiAgfVxufTtcblxuLy9hZGQgY2hhbXAgRlJcbmV4cG9ydCBjb25zdCBhZGRDaGFtcEZSID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBjb25zdCBmaWNoZSA9IGF3YWl0IEZpY2hlRlIuZmluZE9uZSh7IF9pZDogcmVxLnBhcmFtcy5pZCB9KTtcbiAgY29uc3QgeyBsaWJlbGxlLCBiYXNlU2FsYXJpYWxlLCB0YXV4LCBiYXNlUGF0cm9uYWxlLCB0YXV4UGF0cm9uYWwgfSA9IHJlcS5ib2R5O1xuXG4gIGlmIChmaWNoZSkge1xuICAgIGNvbnN0IHNhbGFyaWFsZSA9IChiYXNlU2FsYXJpYWxlICogdGF1eCkgLyAxMDA7XG4gICAgY29uc3QgcGF0cm9uYWwgPSAoYmFzZVBhdHJvbmFsZSAqIHRhdXhQYXRyb25hbCkgLyAxMDA7XG4gICAgY29uc3QgY2hhbXAgPSBuZXcgQ2hhbXBGaWNoZUZSKHtcbiAgICAgIGxpYmVsbGU6IGxpYmVsbGUsXG4gICAgICBiYXNlU2FsYXJpYWxlOiBiYXNlU2FsYXJpYWxlLFxuICAgICAgdGF1eDogdGF1eCxcbiAgICAgIHJlc3VsdGF0U2FsYXJpYWw6IHNhbGFyaWFsZSxcbiAgICAgIGJhc2VQYXRyb25hbGU6IGJhc2VQYXRyb25hbGUsXG4gICAgICB0YXV4UGF0cm9uYWw6IHRhdXhQYXRyb25hbCxcbiAgICAgIHJlc3VsdGF0UGF0cm9uYWw6IHBhdHJvbmFsLFxuICAgICAgRmljaGU6IGZpY2hlLFxuICAgIH0pO1xuICAgIGNoYW1wLnBvcHVsYXRlKCdGaWNoZScpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzYXZlZGNoYW1wID0gYXdhaXQgY2hhbXAuc2F2ZSgpO1xuICAgICAgZmljaGU/LkNoYW1wRmljaGU/LnB1c2goc2F2ZWRjaGFtcCk7XG4gICAgICBmaWNoZS5zYXZlKCk7XG4gICAgICByZXMuc2VuZChzYXZlZGNoYW1wKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdpbCB5IGEgdW5lIGVycmV1cicpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCgncGFzIGRlIGZpY2hlIGF2ZWMgY2V0IGlkJyk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGaWNoZUZSID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IGZvdW5kY2hhbXAgPSBhd2FpdCBDaGFtcEZpY2hlRlIuZmluZCh7IF9pZDogcmVxLnBhcmFtcy5pZCB9KS5wb3B1bGF0ZSgnRmljaGUnKTtcbiAgcmVzLmpzb24oZm91bmRjaGFtcFswXS5GaWNoZSk7XG59O1xuXG4vL3VwZGF0ZSBDaGFtcCBGUlxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNoYW1wRlIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgY2hhbXAgPSBhd2FpdCBDaGFtcEZpY2hlRlIuZmluZE9uZSh7IF9pZDogcmVxLnBhcmFtcy5pZCB9KTtcbiAgY29uc3QgZmljaGUgPSBhd2FpdCBGaWNoZUZSLmZpbmRPbmUoeyBfaWQ6IGNoYW1wPy5GaWNoZSB9KTtcbiAgY29uc3QgeyBsaWJlbGxlLCBiYXNlU2FsYXJpYWxlLCB0YXV4LCBiYXNlUGF0cm9uYWxlLCB0YXV4UGF0cm9uYWwgfSA9IHJlcS5ib2R5O1xuXG4gIGlmIChjaGFtcCkge1xuICAgIGNvbnN0IHNhbGFyaWFsZSA9IChiYXNlU2FsYXJpYWxlICogdGF1eCkgLyAxMDA7XG4gICAgY29uc3QgcGF0cm9uYWwgPSAoYmFzZVBhdHJvbmFsZSAqIHRhdXhQYXRyb25hbCkgLyAxMDA7XG4gICAgQ2hhbXBGaWNoZUZSLnVwZGF0ZU9uZShcbiAgICAgIHsgX2lkOiBjaGFtcC5faWQgfSxcbiAgICAgIHtcbiAgICAgICAgbGliZWxsZTogbGliZWxsZSxcbiAgICAgICAgYmFzZVNhbGFyaWFsZTogYmFzZVNhbGFyaWFsZSxcbiAgICAgICAgdGF1eDogdGF1eCxcbiAgICAgICAgcmVzdWx0YXRTYWxhcmlhbDogc2FsYXJpYWxlLFxuICAgICAgICBiYXNlUGF0cm9uYWxlOiBiYXNlUGF0cm9uYWxlLFxuICAgICAgICB0YXV4UGF0cm9uYWw6IHRhdXhQYXRyb25hbCxcbiAgICAgICAgcmVzdWx0YXRQYXRyb25hbDogcGF0cm9uYWwsXG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdlcnJldXInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoJ2NoYW1wIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgY2hhbXAuc2F2ZSgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzLnN0YXR1cyg0MDApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ2NoYW1wIGludHJvdXZhYmxlJyk7XG4gIH1cbn07XG5cbi8vZGVsZXRlIGNoYW1wIEZSXG5leHBvcnQgY29uc3QgZGVsZXRlQ2hhbXBGUiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBjaGFtcCA9IGF3YWl0IENoYW1wRmljaGVGUi5maW5kT25lKHsgX2lkOiByZXEucGFyYW1zLmlkIH0pO1xuICBpZiAoY2hhbXApIHtcbiAgICBhd2FpdCBDaGFtcEZpY2hlRlIuZGVsZXRlT25lKHsgX2lkOiBjaGFtcC5faWQgfSk7XG4gICAgY29uc3QgZmljaGUgPSBhd2FpdCBGaWNoZUZSLmZpbmRPbmUoeyBfaWQ6IGNoYW1wLkZpY2hlIH0pO1xuICAgIGNvbnN0IGluZCA9IGZpY2hlPy5DaGFtcEZpY2hlPy5pbmRleE9mKGNoYW1wKTtcbiAgICBpZiAoaW5kKSBmaWNoZT8uQ2hhbXBGaWNoZT8uc3BsaWNlKGluZCwgMSk7XG4gICAgZmljaGU/LnNhdmUoKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoJ2NoYW1wIGRlbGV0ZWQnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLnNlbmQoJ25vIGNoYW1wIHdpdGggaWQ6ICcgKyByZXEucGFyYW1zLmlkKTtcbiAgfVxufTtcblxuLy9nZXQgY2hhbXBzIGZpY2hlIFROXG5leHBvcnQgY29uc3QgZ2V0QWxsQ2hhbXBzVE4gPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjaGFtcCA9IGF3YWl0IENoYW1wRmljaGVUTi5maW5kKCk7XG4gICAgcmV0dXJuIHJlcy5zZW5kKGNoYW1wKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnNlbmQoJ3BhcyBkZSBjaGFtcHMnKTtcbiAgfVxufTtcblxuLy9hZGQgY2hhbXAgVE5cbmV4cG9ydCBjb25zdCBhZGRDaGFtcFROID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBjb25zdCBmaWNoZSA9IGF3YWl0IEZpY2hlVE4uZmluZE9uZSh7IF9pZDogcmVxLnBhcmFtcy5pZCB9KTtcbiAgY29uc3QgeyBsaWJlbGxlLCBub21icmUsIGdhaW5zLCByZXRlbnVlcyB9ID0gcmVxLmJvZHk7XG5cbiAgaWYgKGZpY2hlKSB7XG4gICAgY29uc3QgY2hhbXAgPSBuZXcgQ2hhbXBGaWNoZVROKHtcbiAgICAgIGxpYmVsbGU6IGxpYmVsbGUsXG4gICAgICBub21icmU6IG5vbWJyZSxcbiAgICAgIGdhaW5zOiBnYWlucyxcbiAgICAgIHJldGVudWVzOiByZXRlbnVlcyxcbiAgICAgIEZpY2hlOiBmaWNoZSxcbiAgICB9KTtcbiAgICBjaGFtcC5wb3B1bGF0ZSgnRmljaGUnKTtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2F2ZWRjaGFtcCA9IGF3YWl0IGNoYW1wLnNhdmUoKTtcbiAgICAgIGZpY2hlPy5DaGFtcEZpY2hlPy5wdXNoKHNhdmVkY2hhbXApO1xuICAgICAgZmljaGUuc2F2ZSgpO1xuICAgICAgcmVzLnNlbmQoc2F2ZWRjaGFtcCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCgnaWwgeSBhIHVuZSBlcnJldXInKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoJ3BhcyBkZSBmaWNoZSBhdmVjIGNldCBpZCcpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RmljaGVUTiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBmb3VuZGNoYW1wID0gYXdhaXQgQ2hhbXBGaWNoZVROLmZpbmQoeyBfaWQ6IHJlcS5wYXJhbXMuaWQgfSkucG9wdWxhdGUoJ0ZpY2hlJyk7XG4gIHJlcy5qc29uKGZvdW5kY2hhbXBbMF0uRmljaGUpO1xufTtcblxuLy91cGRhdGUgQ2hhbXAgVE5cbmV4cG9ydCBjb25zdCB1cGRhdGVDaGFtcFROID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IGNoYW1wID0gYXdhaXQgQ2hhbXBGaWNoZVROLmZpbmRPbmUoeyBfaWQ6IHJlcS5wYXJhbXMuaWQgfSk7XG4gIGNvbnN0IGZpY2hlID0gYXdhaXQgRmljaGVUTi5maW5kT25lKHsgX2lkOiBjaGFtcD8uRmljaGUgfSk7XG4gIGNvbnN0IHsgbGliZWxsZSwgbm9tYnJlLCBnYWlucywgcmV0ZW51ZXMgfSA9IHJlcS5ib2R5O1xuXG4gIGlmIChjaGFtcCkge1xuICAgIENoYW1wRmljaGVUTi51cGRhdGVPbmUoXG4gICAgICB7IF9pZDogY2hhbXAuX2lkIH0sXG4gICAgICB7XG4gICAgICAgIGxpYmVsbGU6IGxpYmVsbGUsXG4gICAgICAgIG5vbWJyZTogbm9tYnJlLFxuICAgICAgICBnYWluczogZ2FpbnMsXG4gICAgICAgIHJldGVudWVzOiByZXRlbnVlcyxcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ2VycmV1cicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCgnY2hhbXAgdXBkYXRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICApO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjaGFtcC5zYXZlKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDQwMCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnY2hhbXAgaW50cm91dmFibGUnKTtcbiAgfVxufTtcblxuLy9kZWxldGUgY2hhbXAgVE5cbmV4cG9ydCBjb25zdCBkZWxldGVDaGFtcFROID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IGNoYW1wID0gYXdhaXQgQ2hhbXBGaWNoZVROLmZpbmRPbmUoeyBfaWQ6IHJlcS5wYXJhbXMuaWQgfSk7XG4gIGlmIChjaGFtcCkge1xuICAgIGF3YWl0IENoYW1wRmljaGVUTi5kZWxldGVPbmUoeyBfaWQ6IGNoYW1wLl9pZCB9KTtcbiAgICBjb25zdCBmaWNoZSA9IGF3YWl0IEZpY2hlVE4uZmluZE9uZSh7IF9pZDogY2hhbXAuRmljaGUgfSk7XG4gICAgY29uc3QgaW5kID0gZmljaGU/LkNoYW1wRmljaGU/LmluZGV4T2YoY2hhbXApO1xuICAgIGlmIChpbmQpIGZpY2hlPy5DaGFtcEZpY2hlPy5zcGxpY2UoaW5kLCAxKTtcbiAgICBmaWNoZT8uc2F2ZSgpO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCgnY2hhbXAgZGVsZXRlZCcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZCgnbm8gY2hhbXAgd2l0aCBpZDogJyArIHJlcS5wYXJhbXMuaWQpO1xuICB9XG59O1xuIl19