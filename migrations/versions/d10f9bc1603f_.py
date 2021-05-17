"""empty message

Revision ID: d10f9bc1603f
Revises: d5709ab146ed
Create Date: 2021-05-16 19:59:36.259847

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd10f9bc1603f'
down_revision = 'd5709ab146ed'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('categories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('categorie_name', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('services',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('categorie_id', sa.Integer(), nullable=True),
    sa.Column('service_name', sa.String(length=120), nullable=False),
    sa.ForeignKeyConstraint(['categorie_id'], ['categories.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('vendor',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('categorie_id', sa.Integer(), nullable=True),
    sa.Column('service_id', sa.Integer(), nullable=True),
    sa.Column('province', sa.String(length=120), nullable=False),
    sa.Column('canton', sa.String(length=120), nullable=False),
    sa.ForeignKeyConstraint(['categorie_id'], ['categories.id'], ),
    sa.ForeignKeyConstraint(['service_id'], ['services.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('user', sa.Column('personal_id', sa.String(length=120), nullable=False))
    op.drop_column('user', 'confirm_password')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('confirm_password', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
    op.drop_column('user', 'personal_id')
    op.drop_table('vendor')
    op.drop_table('services')
    op.drop_table('categories')
    # ### end Alembic commands ###
