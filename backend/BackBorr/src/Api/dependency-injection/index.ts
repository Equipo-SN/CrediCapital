import { CreateBorrower } from '../../Application/features/borrowers/CreateBorrower/CreateBorrower';
import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';
import { FileBorrowerRepository } from '../../Persistence/repositories/FileBorrowerRepository';
import { CreateBorrowerController } from '../../Api/controllers/borrower/CreateBorrowerController';
import CheckStatusController from '../controllers/status/CheckStatusController';

const container = new ContainerBuilder();
const loader = new YamlFileLoader(container);
const env = process.env.NODE_ENV ?? 'dev';

loader.load(`${__dirname}/application_${env}.yaml`);
container.register('controller.CheckStatus', CheckStatusController);
container.register('controller.CreateBorrower', CreateBorrowerController);

container.register('CreateBorrower', CreateBorrower);
container.register('BorrowerRepository', FileBorrowerRepository);

export default container;
