"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteChamp = exports.updateChamp = exports.getFacture = exports.addChamp = exports.getAllChamps = void 0;
const facture_model_1 = require("../models/facture.model");
const champFacture_model_1 = require("../models/champFacture.model");
const getAllChamps = async (req, res) => {
    try {
        const champ = await champFacture_model_1.Champ.find();
        return res.send(champ);
    }
    catch (err) {
        res.send('pas de champs');
    }
};
exports.getAllChamps = getAllChamps;
const addChamp = async (req, res) => {
    const fact = await facture_model_1.Facture.findOne({ _id: req.params.id });
    if (fact) {
        const total = req.body.coutUnitaire * req.body.quantite;
        const champ = new champFacture_model_1.Champ({
            description: req.body.description,
            coutUnitaire: req.body.coutUnitaire,
            facture: fact,
            quantite: req.body.quantite,
            montant: total,
        });
        champ.populate('facture');
        try {
            const savedchamp = await champ.save();
            fact.champFacture.push(savedchamp);
            fact.save();
            res.send(savedchamp);
        }
        catch (err) {
            res.status(400).send('il y a une erreur');
        }
    }
    else {
        res.status(400).send('pas de facture avec cet id');
    }
};
exports.addChamp = addChamp;
const getFacture = async (req, res) => {
    const foundchamp = await champFacture_model_1.Champ.find({ _id: req.params.id }).populate('facture');
    res.json(foundchamp[0].facture);
};
exports.getFacture = getFacture;
const updateChamp = async (req, res) => {
    const champ = await champFacture_model_1.Champ.findOne({ _id: req.params.id });
    const facture = await facture_model_1.Facture.findOne({ _id: champ === null || champ === void 0 ? void 0 : champ.facture._id });
    if (champ) {
        champFacture_model_1.Champ.updateOne({ _id: champ._id }, {
            description: req.body.description,
            coutUnitaire: req.body.coutUnitaire,
            quantite: req.body.quantite,
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
exports.updateChamp = updateChamp;
const deleteChamp = async (req, res) => {
    const champ = await champFacture_model_1.Champ.findOne({ _id: req.params.id });
    if (champ) {
        await champFacture_model_1.Champ.deleteOne({ _id: champ._id });
        const facture = await facture_model_1.Facture.findOne({ _id: champ.facture._id });
        const ind = facture === null || facture === void 0 ? void 0 : facture.champFacture.indexOf(champ);
        if (ind)
            facture === null || facture === void 0 ? void 0 : facture.champFacture.splice(ind, 1);
        facture === null || facture === void 0 ? void 0 : facture.save();
        return res.status(200).send('champ deleted');
    }
    else {
        return res.status(404).send('no champ with id: ' + req.params.id);
    }
};
exports.deleteChamp = deleteChamp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbXBGYWN0dXJlLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9jaGFtcEZhY3R1cmUuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyREFBa0Q7QUFDbEQscUVBQXFEO0FBSTlDLE1BQU0sWUFBWSxHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDN0MsSUFBSTtRQUNGLE1BQU0sS0FBSyxHQUFHLE1BQU0sMEJBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDM0I7QUFDSCxDQUFDLENBQUM7QUFQVyxRQUFBLFlBQVksZ0JBT3ZCO0FBRUssTUFBTSxRQUFRLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUM1RCxNQUFNLElBQUksR0FBRyxNQUFNLHVCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUUzRCxJQUFJLElBQUksRUFBRTtRQUNSLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hELE1BQU0sS0FBSyxHQUFHLElBQUksMEJBQUssQ0FBQztZQUN0QixXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQ2pDLFlBQVksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDbkMsT0FBTyxFQUFFLElBQUk7WUFDYixRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQzNCLE9BQU8sRUFB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QUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxRCxJQUFJLEtBQUssRUFBRTtRQUNULE1BQU0sMEJBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDMUMsTUFBTSxPQUFPLEdBQUcsTUFBTSx1QkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDbEUsTUFBTSxHQUFHLEdBQUcsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsSUFBSSxHQUFHO1lBQUUsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxJQUFJLEVBQUUsQ0FBQztRQUNoQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQzlDO1NBQU07UUFDTCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbkU7QUFDSCxDQUFDLENBQUM7QUFaVyxRQUFBLFdBQVcsZUFZdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWN0dXJlIH0gZnJvbSAnLi4vbW9kZWxzL2ZhY3R1cmUubW9kZWwnO1xuaW1wb3J0IHsgQ2hhbXAgfSBmcm9tICcuLi9tb2RlbHMvY2hhbXBGYWN0dXJlLm1vZGVsJztcbmltcG9ydCBBcHBMb2dnZXIgZnJvbSAnLi4vbG9nZ2VyL2FwcC5sb2dnZXInO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsQ2hhbXBzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY2hhbXAgPSBhd2FpdCBDaGFtcC5maW5kKCk7XG4gICAgcmV0dXJuIHJlcy5zZW5kKGNoYW1wKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmVzLnNlbmQoJ3BhcyBkZSBjaGFtcHMnKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGFkZENoYW1wID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBjb25zdCBmYWN0ID0gYXdhaXQgRmFjdHVyZS5maW5kT25lKHsgX2lkOiByZXEucGFyYW1zLmlkIH0pO1xuXG4gIGlmIChmYWN0KSB7XG4gICAgY29uc3QgdG90YWwgPSByZXEuYm9keS5jb3V0VW5pdGFpcmUgKiByZXEuYm9keS5xdWFudGl0ZTtcbiAgICBjb25zdCBjaGFtcCA9IG5ldyBDaGFtcCh7XG4gICAgICBkZXNjcmlwdGlvbjogcmVxLmJvZHkuZGVzY3JpcHRpb24sXG4gICAgICBjb3V0VW5pdGFpcmU6IHJlcS5ib2R5LmNvdXRVbml0YWlyZSxcbiAgICAgIGZhY3R1cmU6IGZhY3QsXG4gICAgICBxdWFudGl0ZTogcmVxLmJvZHkucXVhbnRpdGUsXG4gICAgICBtb250YW50OiB0b3RhbCxcbiAgICB9KTtcbiAgICBjaGFtcC5wb3B1bGF0ZSgnZmFjdHVyZScpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzYXZlZGNoYW1wID0gYXdhaXQgY2hhbXAuc2F2ZSgpO1xuICAgICAgZmFjdC5jaGFtcEZhY3R1cmUucHVzaChzYXZlZGNoYW1wKTtcbiAgICAgIGZhY3Quc2F2ZSgpO1xuICAgICAgcmVzLnNlbmQoc2F2ZWRjaGFtcCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCgnaWwgeSBhIHVuZSBlcnJldXInKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoJ3BhcyBkZSBmYWN0dXJlIGF2ZWMgY2V0IGlkJyk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGYWN0dXJlID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IGZvdW5kY2hhbXAgPSBhd2FpdCBDaGFtcC5maW5kKHsgX2lkOiByZXEucGFyYW1zLmlkIH0pLnBvcHVsYXRlKCdmYWN0dXJlJyk7XG4gIHJlcy5qc29uKGZvdW5kY2hhbXBbMF0uZmFjdHVyZSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2hhbXAgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgY2hhbXAgPSBhd2FpdCBDaGFtcC5maW5kT25lKHsgX2lkOiByZXEucGFyYW1zLmlkIH0pO1xuICBjb25zdCBmYWN0dXJlID0gYXdhaXQgRmFjdHVyZS5maW5kT25lKHsgX2lkOiBjaGFtcD8uZmFjdHVyZS5faWQgfSk7XG5cbiAgaWYgKGNoYW1wKSB7XG4gICAgQ2hhbXAudXBkYXRlT25lKFxuICAgICAgeyBfaWQ6IGNoYW1wLl9pZCB9LFxuICAgICAge1xuICAgICAgICBkZXNjcmlwdGlvbjogcmVxLmJvZHkuZGVzY3JpcHRpb24sXG4gICAgICAgIGNvdXRVbml0YWlyZTogcmVxLmJvZHkuY291dFVuaXRhaXJlLFxuICAgICAgICBxdWFudGl0ZTogcmVxLmJvZHkucXVhbnRpdGUsXG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdlcnJldXInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoJ2NoYW1wIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgY2hhbXAuc2F2ZSgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzLnN0YXR1cyg0MDApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ2NoYW1wIGludHJvdXZhYmxlJyk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDaGFtcCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBjaGFtcCA9IGF3YWl0IENoYW1wLmZpbmRPbmUoeyBfaWQ6IHJlcS5wYXJhbXMuaWQgfSk7XG4gIGlmIChjaGFtcCkge1xuICAgIGF3YWl0IENoYW1wLmRlbGV0ZU9uZSh7IF9pZDogY2hhbXAuX2lkIH0pO1xuICAgIGNvbnN0IGZhY3R1cmUgPSBhd2FpdCBGYWN0dXJlLmZpbmRPbmUoeyBfaWQ6IGNoYW1wLmZhY3R1cmUuX2lkIH0pO1xuICAgIGNvbnN0IGluZCA9IGZhY3R1cmU/LmNoYW1wRmFjdHVyZS5pbmRleE9mKGNoYW1wKTtcbiAgICBpZiAoaW5kKSBmYWN0dXJlPy5jaGFtcEZhY3R1cmUuc3BsaWNlKGluZCwgMSk7XG4gICAgZmFjdHVyZT8uc2F2ZSgpO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCgnY2hhbXAgZGVsZXRlZCcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZCgnbm8gY2hhbXAgd2l0aCBpZDogJyArIHJlcS5wYXJhbXMuaWQpO1xuICB9XG59O1xuIl19